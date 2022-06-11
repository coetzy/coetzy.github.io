import { useData } from "./api";

const Landing = () => {
  const { data } = useData();
  return (
    <div className="flex flex-1 justify-center items-center">
      <video className="object-contain h-full" autoPlay loop muted playsInline>
        <source src={data && data.landing} type="video/mp4"></source>
      </video>
    </div>
  );
};
export default Landing;
