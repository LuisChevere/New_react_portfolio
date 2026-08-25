import Background from "../assets/images/Newheadshot.jpg";
import HeroContent from "./heroContent";
import NavBar from "./Navbar";

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
      <NavBar />
      <HeroContent />
    </section>
  );
}

export default Hero;
