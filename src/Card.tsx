import { useRef, useState } from "react";

import { cx } from "./common";

const Card = ({ item }) => {
  const cardRef = useRef<any>();

  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <div
      ref={cardRef}
      className={cx("m-2 mb-4", isLoading ? "bg-gray-200 h-[256px]" : "")}
    >
      {item.path.endsWith(".mp4") ? (
        <video
          className="w-full"
          controls={!isLoading}
          onLoadedData={() => setLoading(false)}
        >
          <source src={require(`${item["path"]}`)} type="video/mp4"></source>
        </video>
      ) : (
        <img
          className="w-full cursor-pointer"
          src={require(`${item["path"]}`)}
          onLoad={() => setLoading(false)}
          onClick={handleClick}
        ></img>
      )}
      {item["title"] && (
        <p className="text-black text-center text-sm p-2">{item["title"]}</p>
      )}
      {open && (
        <div
          className="absolute z-10 inset-0 flex bg-black/80"
          onClick={handleClick}
        >
          <img
            className="flex-1 object-contain"
            src={require(`${item["path"]}`)}
            onLoad={() => setLoading(false)}
            onClick={handleClick}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Card;
