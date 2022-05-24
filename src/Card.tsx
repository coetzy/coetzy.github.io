import { useRef } from "react";

const Card = ({ item }) => {
  const cardRef = useRef<any>();

  return (
    <div ref={cardRef} className="m-2">
      {item.path.endsWith(".mp4") ? (
        <video className="w-full" controls>
          <source src={require(`${item["path"]}`)} type="video/mp4"></source>
        </video>
      ) : (
        <img className="w-full" src={require(`${item["path"]}`)}></img>
      )}
      <p className="text-black text-center text-sm p-2">{item["title"]}</p>
    </div>
  );
};

export default Card;
