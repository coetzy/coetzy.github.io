import { useQuery } from "react-query";

const PROJECT_ID = "qlcve5je";
const DATASET = "production";
const API_VERSION = "v2021-10-21";
const QUERY_KEY = "data";

let QUERY = encodeURIComponent(
  `{
    "menu": *[_type == "index"].content[]->title,
    "logo": *[_type == "index"].logo.asset->url,
    "landing": *[_type == "index"].landing.asset->url,
    "about": *[_type == "about"][0] {
        description,
        "img": picture.asset->url,
        "height": picture.asset->metadata.dimensions.height,
        "width": picture.asset->metadata.dimensions.width
    },
    "galleries":*[_type == "gallery"][] {
      title,
      content[] {
        title,
        collection,
        "path": coalesce(image.asset, video.content.asset)->url,
        "height": coalesce(image.asset->metadata.dimensions.height, video.height),
        "width": coalesce(image.asset->metadata.dimensions.width, video.width)
      }
    }
  }`
);

function useData() {
  return useQuery<ApiResponse, Error>(QUERY_KEY, getData);
}

interface Gallery {
  collection: string;
  height: number;
  path: string;
  title: string;
  width: number;
}

interface About {
  height: number;
  img: string;
  description: string;
  width: number;
}

interface ApiResponse {
  menu: string[];
  galleries: Gallery[];
  about: About;
  logo: string;
  landing: string;
}

const getData = async (): Promise<ApiResponse> => {
  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/query/${DATASET}?query=${QUERY}`
  );
  return res.json().then((res) => {
    let data = res.result;
    if (data.galleries) {
      data.galleries.forEach((item) => (data[item.title] = item.content || []));
    }
    return data;
  });
};

export { useData };
