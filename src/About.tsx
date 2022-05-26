import yo from "./images/yo2.jpg";

const About = () => (
  <main className="flex flex-1 flex-col lg:flex-row lg:justify-center overflow-auto items-center m-8">
    <img className="p-4 w-[512px] object-contain" src={yo}></img>
    <div className="p-4 lg:w-1/2 text-lg">
      <p>
        La reflexión personal y el intercambio de ideas con mis colegas son
        imprescindibles para generar un marco conceptual de los cuales se nutren
        cada una de mis obras.
      </p>
      <p>
        Hace algunos años me introduje en el arte urbano, el cual hoy en día es
        una gran pasión para mí, y su esencia me acompaña en casi todo lo que
        hago.
      </p>
      <p>
        En mi proceso creativo me divierte explorar diferentes técnicas,
        materiales y paletas de colores. Y, en ese proceso, la tecnología es una
        aliada de mi arte. Contribuye activamente en mis obras y de cierta forma
        me permite combatir su fugacidad.
      </p>
    </div>
  </main>
);

export default About;
