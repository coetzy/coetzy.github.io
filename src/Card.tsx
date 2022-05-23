import { useRef, useState } from "react";

const Card = ({ item }) => {
  const cardRef = useRef<any>();
  const [height, setHeight] = useState();

  const changeHeight = () => {
    const styles = window.getComputedStyle(cardRef.current);
    const marginTop = Number.parseInt(styles.marginTop.replace("px", ""));
    const marginBottom = Number.parseInt(styles.marginBottom.replace("px", ""));
    setHeight(marginTop + marginBottom + cardRef.current.scrollHeight);
  };

  return (
    <div
      ref={cardRef}
      className="m-2"
      style={{
        gridRowEnd: height ? `span ${height}` : "auto",
        zIndex: height ? 1 : -1,
      }}
    >
      <img src={require(`${item["path"]}`)} onLoad={changeHeight}></img>
      <p className="text-black text-center text-sm p-2">{item["title"]}</p>
    </div>
  );
};

export default Card;
