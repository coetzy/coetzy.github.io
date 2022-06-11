import { useRef, useState } from "react";

import { cx } from "./common";

const Card = ({ item }) => {
  const cardRef = useRef<any>();

  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <div ref={cardRef} className="m-2 mb-4">
      <div className="relative">
        {item.path.endsWith(".mp4") ? (
          <video
            className={cx(
              "w-full cursor-pointer",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            controls={!isLoading}
            onLoadedData={() => setLoading(false)}
          >
            <source src={item["path"]} type="video/mp4"></source>
          </video>
        ) : (
          <img
            loading="lazy"
            className={cx(
              "w-full cursor-pointer",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            src={item["path"]}
            width={item["width"]}
            height={item["height"]}
            onClick={handleClick}
            onLoad={() => setLoading(false)}
          ></img>
        )}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 w-full"></div>
        )}
      </div>
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
            src={item["path"]}
            onLoad={() => setLoading(false)}
            onClick={handleClick}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Card;
