import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Card from "./Card";
import { cx } from "./common";
import Cross from "./Cross";
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

const label = "Categorías";

const Filter = () => {
  let urlParams = useParams();
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);

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
      <div className="hidden lg:flex p-4 lg:w-64 flex-col border-r">
        <span className="p-2 text-2xl font-saira tracking-header">{label}</span>
        <CollectionMenu collections={collections} />
      </div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="lg:hidden p-4 pb-0 text-black text-2xl hover:text-softPink font-saira tracking-header"
      >
        {label}
      </button>
      {isOpen && (
        <nav className="absolute inset-0 px-8 py-20 text-black bg-white/90">
          <div className="flex w-full items-center justify-between">
            <span className="p-2 text-2xl font-saira tracking-header">
              {label}
            </span>
            <Cross onClick={handleClick} />
          </div>
          <CollectionMenu collections={collections} />
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
    <div
      key={urlParams.type}
      className="flex flex-1 flex-col lg:flex-row overflow-auto"
    >
      <Filter />
      <div className="flex-1 justify-center flex overflow-auto m-2">
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
