import Background from "../assets/images/headshot.jpg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
}

export default Hero;
