import Background from "../assets/images/Newheadshot.jpg";
import NavBar from "./Navbar";
import reactLogo from "../assets/logos/React-logo.png";
import Wordpress from "../assets/logos/Wordpress-grey.png";
import Woo from "../assets/logos/woo.png";
import JS from "../assets/logos/Js.png";
import TW from "../assets/logos/Tailwind.png";
import css from "../assets/logos/CSS.png";

const logos = [
  {
    title: "React",
    image: reactLogo,
  },
  {
    title: "Wordpress",
    image: Wordpress,
  },
  {
    title: "WooCommerce",
    image: Woo,
  },
  {
    title: "Javascript",
    image: JS,
  },
  {
    title: "Tailwind",
    image: TW,
  },
  {
    title: "CSS",
    image: css,
  },
];

function Hero() {
  return (
    <section
      id="hero-bg"
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
      <div id="hero-info" className="pl-[40px] pt-[50px]">
        <p className="text-[#B88A46] text-[10px] tracking-[2px] pb-[15px] uppercase">
          frontend web developer
        </p>
        <h1
          className="font-['Cormorant_Garamond'] text-[70px] font-normal tracking-[2px] text-white leading-none pb-[20px]"
          id="hero-header"
        >
          I BUILD DIGITAL <br />
          EXPERIENCES
        </h1>
        <p className="text-white text-[12px] font-thin tracking-[2px] pb-[20px] leading-6">
          Crafting modern high-performance websites and
          <br />
          ecommerce solutions that are built with purpose,
          <br />
          designed with intention, and made to last.
        </p>
        <div className="flex gap-5 pb-[20px]">
          <button class=" bg-[#B88A46] text-[12px] hover:bg-black hover:text-[#B88A46] text-black py-2 px-5 border border-[#B88A46] uppercase rounded">
            <a href="#projects" className="inline-flex items-center gap-5">
              view my work
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </button>

          <button class="inline-flex items-center gap-5 text-[12px] hover:bg-black hover:text-[#B88A46] text-white py-2 px-10 border border-[#B88A46] uppercase rounded">
            <a href="#about">about me</a>
          </button>
        </div>
        <p className="text-[#8A8A8A] text-[10px] tracking-[2px] uppercase">
          technologies i use
        </p>
        <div className="inline-flex gap-8 pt-[20px]" id="tech">
          {logos.map((logo) => (
            <a key={logo.image}>
              <img className="w-10 h-10" src={logo.image} alt="React Logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
