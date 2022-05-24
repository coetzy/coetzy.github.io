const Landing = () => (
  <div className="flex justify-center items-center">
    <video className="object-contain h-full" autoPlay loop muted playsInline>
      <source src={require("./images/landing.mp4")} type="video/mp4"></source>
    </video>
  </div>
);
export default Landing;
