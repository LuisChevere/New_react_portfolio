import Background from "../assets/images/newHeadshot.jpg";
import HeroContent from "./heroContent";
import NavBar from "./Navbar";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "40% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
      <HeroContent />
    </section>
  );
}

export default Hero;
