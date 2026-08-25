import Background from "../assets/images/Newheadshot.jpg";
import HeroContent from "./heroContent";

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
    >
      <HeroContent />
    </section>
  );
}

export default Hero;
