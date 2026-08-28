import Atelier from "../assets/images/Atelier.png";
import LookBook from "../assets/images/Lookbook.png";
import Heathenz from "../assets/images/Heathenz.png";
import Portfolio from "../assets/images/Web-dev.jpg";

const projects = [
  {
    title: "LookBook",
    description: "Editorial Wordpress Site",
    image: LookBook, // Update image path
    link: "https://lookbook.luischevere.com/",
  },
  {
    title: "Heathenz Entertainment",
    description: "Brand Wordpress Website",
    image: Heathenz, // Update image path
    link: "https://heathenzentertainment.com/",
  },
  {
    title: "LC Atelier",
    description: "WooCommerce Clothing Store",
    image: Atelier, // Update image path
    link: "https://atelier.luischevere.com/",
  },
  {
    title: "React Web Dev Portfolio",
    description: "React Portfolio Website",
    image: Portfolio, // Update image path
    link: "https://luischevere.com/",
  },
];

function Projects() {
  return (
    <section className="bg-[#0A0A0A] px-[40px] py-[40px]">
      <div className="project-content">
        <h2 className="font-['Cormorant_Garamond'] text-[20px] font-normal tracking-[2px] text-white leading-none pb-[20px] uppercase">
          featured projects
        </h2>
        <div className="flex justify-center gap-5" id="projects">
          {projects.map((project) => (
            <div className=" block max-w-70 border border-[#B88A46] rounded-base pb-[15px]">
              <a key={project.image}>
                <img src={project.image} alt="Lookbook landing" />
              </a>
              <div className="pl-[10px] pt-[20px]">
                <a>
                  <h5 class="font-['Cormorant_Garamond'] text-[15px] font-normal tracking-[2px] text-white leading-none pb-[10px] uppercase">
                    {project.title}
                  </h5>
                  <p className="text-white font-thin pb-[10px] text-[14px]">
                    {project.description}
                  </p>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  class="inline-flex items-center text-[#B88A46] font-light hover:text-white leading-5 rounded-base text-sm focus:outline-none uppercase"
                >
                  view project
                  <svg
                    class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                    aria-hidden="true"
                    xmlns="https://lookbook.luischevere.com/"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
