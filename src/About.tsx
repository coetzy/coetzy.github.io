import { useData } from "./api";

const About = () => {
  const { data } = useData();

  return (
    <main className="flex flex-1 flex-col lg:flex-row lg:justify-center overflow-auto items-center m-8">
      <img
        className="p-4 w-[512px] object-contain"
        src={data && data.about.img}
      ></img>
      <div className="p-4 lg:w-1/2 text-lg">
        <p>{data && data.about.description}</p>
      </div>
    </main>
  );
};

export default About;
