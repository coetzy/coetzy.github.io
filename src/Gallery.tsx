import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Card from "./Card";
import { cx } from "./common";
import imagedb from "./imagedb";
import Check from "./images/check.png";

const CollectionMenu = ({ className }) => {
  let urlParams = useParams();
  const [search, setSearch] = useSearchParams();

  const collections = [
    ...new Set<string>(
      urlParams.type &&
        imagedb[urlParams.type]
          .filter((item) => item.collection)
          .map((item) => item.collection)
    ),
  ];

  const handleClick = (item) => {
    search.has(item) ? search.delete(item) : search.set(item, "");
    setSearch(search);
  };

  return collections && collections.length ? (
    <div className={className}>
      <span className="p-2 text-xl">Categorías</span>
      {collections.map((item) => (
        <button
          className={cx(
            "group text-left text-black hover:text-softPink p-2 flex items-center text-lg"
            // search.has(item) ? "bg-red-500" : ""
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
    </div>
  ) : null;
};

const Filter = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className="md:hidden text-black text-xl pt-4 hover:text-softPink"
      >
        Categorías
      </button>
      <CollectionMenu className="hidden md:flex p-4 md:w-64 flex-col border-r" />
      {isOpen && (
        <nav className="absolute top-0 left-0 h-screen w-screen bg-white flex flex-col items-center z-10 p-4 px-24">
          <button
            onClick={() => setOpen(false)}
            className="group w-12 h-12 absolute right-[84px] top-[24px]"
          >
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute rotate-45 left-[23px] top-[8px]" />
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute -rotate-45 left-[23px] top-[8px]" />
          </button>
          <CollectionMenu className="p-2 flex flex-col w-full" />
        </nav>
      )}
    </>
  );
};

const Gallery = () => {
  let urlParams = useParams();

  const [search, setSearch] = useSearchParams();

  const collections = [
    ...new Set<string>(
      urlParams.type &&
        imagedb[urlParams.type]
          .filter((item) => item.collection)
          .map((item) => item.collection)
    ),
  ];
  console.log(collections);

  useEffect(() => {
    console.log(search.getAll("hola"));
  }, [search]);

  const handleClick = (item) => {
    search.has(item) ? search.delete(item) : search.set(item, "");
    setSearch(search);
  };

  return (
    <div
      key={urlParams.type}
      className="flex flex-col md:flex-row"
      // style={{
      //   gridTemplateColumns: "250px 1fr",
      // }}
    >
      <Filter />
      <div
        className="flex-1 grid p-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, min(450px, 100%))",
          gridTemplateRows: "fit-content",
          gridAutoRows: "1px",
          justifyContent: "center",
        }}
      >
        {urlParams.type &&
          imagedb[urlParams.type]
            .filter((item) => {
              let keys = [...search.keys()];
              return keys && keys.length
                ? keys.includes(item.collection)
                : true;
            })
            .map((item, index) => (
              <Card key={index + item.collection} item={item} />
            ))}
      </div>
    </div>
  );
};

export default Gallery;
