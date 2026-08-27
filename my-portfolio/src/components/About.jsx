import Background from "../assets/images/About-me.jpg";
import Resume from "../assets/Docs/ChevereLSoftware.pdf";

function About() {
  return (
    <section
      className="border-y border-[#B88A46]"
      style={{
        minHeight: "50vh",
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "40% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pl-[50%] pt-[50px]" id="about">
        <p className="text-[#B88A46] text-[14px] tracking-[2px] pb-[15px] uppercase">
          About Me
        </p>
        <h1 className="font-['Cormorant_Garamond'] text-[30px] font-normal tracking-[2px] text-white leading-none pb-[20px] uppercase">
          Developer. Designer. Creator.
        </h1>
        <p className="text-white text-[12px] font-thin tracking-[2px] pb-[20px] leading-6">
          I'm a Full Stack Web Developer and technical sewist with a
          <br />
          passion for building digital experiences and crafting custom
          <br />
          garments. I combine creativity, precision, and code to bring
          <br />
          ideas to life.
        </p>
        <div className="flex gap-5 pb-[20px]">
          <button class=" text-[12px] hover:bg-black text-[#B88A46] py-2 px-5 border border-[#B88A46] uppercase rounded">
            <a
              href={Resume}
              download={Resume}
              className="inline-flex items-center gap-5"
            >
              Download Resume
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
        </div>
      </div>
    </section>
  );
}

export default About;
