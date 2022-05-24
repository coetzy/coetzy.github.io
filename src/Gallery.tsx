import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Card from "./Card";
import { cx } from "./common";
import imagedb from "./imagedb";
import Check from "./images/check.png";
import useWindowDimensions from "./useDimensions";

const splitChildren = (children: any[], parts: number) => {
  let result: any[] = [];
  let array = [...children]; //copy array
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

const CollectionMenu = ({ collections }) => {
  const [search, setSearch] = useSearchParams();

  const handleClick = (item) => {
    search.has(item) ? search.delete(item) : search.set(item, "");
    setSearch(search);
  };

  return (
    <>
      {collections.map((item) => (
        <button
          className={cx(
            "group text-left text-black hover:text-softPink p-2 flex items-center text-lg font-saira tracking-header"
          )}
          onClick={() => handleClick(item)}
        >
          {search.has(item) ? (
            <img className="w-7 mr-2" src={Check} />
          ) : (
            <span className="inline-flex w-7 h-7 border-2 group-hover:border-softPink group-hover:bg-softPink/20 border-black mr-2"></span>
          )}
          <span>{item}</span>
        </button>
      ))}
    </>
  );
};

const Filter = () => {
  const [isOpen, setOpen] = useState(false);
  let urlParams = useParams();

  const collections = [
    ...new Set<string>(
      urlParams.type &&
        imagedb[urlParams.type]
          .filter((item) => item.collection) // remove empty
          .map((item) => item.collection)
    ),
  ];

  return collections && collections.length ? (
    <>
      <div className="hidden 2xl:flex p-4 2xl:w-64 flex-col border-r">
        <span className="p-2 text-xl font-saira tracking-header">
          Categorías
        </span>
        <CollectionMenu collections={collections} />
      </div>
      <div className="2xl:hidden p-2 flex flex-col w-full">
        <button
          onClick={() => setOpen(!isOpen)}
          className=" text-black text-2xl pt-4 hover:text-softPink font-saira tracking-header"
        >
          Categorías
        </button>
      </div>
      {isOpen && (
        <nav className="absolute top-0 left-0 h-screen w-screen bg-white flex flex-col items-center z-10 p-4 px-24">
          <button
            onClick={() => setOpen(false)}
            className="group w-12 h-12 absolute right-[84px] top-[24px]"
          >
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute rotate-45 left-[23px] top-[8px]" />
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute -rotate-45 left-[23px] top-[8px]" />
          </button>
          <div className="p-2 flex flex-col w-full">
            <CollectionMenu collections={collections} />
          </div>
        </nav>
      )}
    </>
  ) : null;
};

const Gallery = () => {
  let urlParams = useParams();
  const { width } = useWindowDimensions();

  const [search, setSearch] = useSearchParams();

  return (
    <div key={urlParams.type} className="flex flex-col 2xl:flex-row">
      <Filter />
      <div className="flex-1 p-4 justify-center flex">
        {urlParams.type &&
          splitChildren(
            imagedb[urlParams.type].filter((item) => {
              let keys = [...search.keys()];
              return keys && keys.length
                ? keys.includes(item.collection)
                : true;
            }),
            width < 768 ? 1 : width < 1536 ? 2 : 3
          ).map((column: any) => (
            <div className="flex-1">
              {column.map((item, index) => (
                <Card key={index + item.path} item={item} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
