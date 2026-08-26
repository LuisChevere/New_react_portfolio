import Frontend from "../assets/logos/Frontend.png";
import Backend from "../assets/logos/Backend.png";
import Wordpressgold from "../assets/logos/Wordpress-gold.png";
import Cart from "../assets/logos/Cart.png";
import Tools from "../assets/logos/Tools.png";

const skills = [
  {
    title: "FrontEnd",
    skill1: "React",
    skill2: "Javascript(ES6+)",
    skill3: "HTML5 / CSS",
    skill4: "Tailwind CSS",
    image: Frontend,
  },
  {
    title: "Backend",
    skill1: "Node",
    skill2: "RESTfull APIs",
    skill3: "Python",
    skill4: "PHP (Novice)",
    image: Backend,
  },
  {
    title: "E-Commerce",
    skill1: "Custom Theme",
    skill2: "Elementor",
    skill3: "WooCommerce",
    skill4: "ACF / Custom Fields",
    image: Cart,
  },
  {
    title: "Wordpress",
    skill1: "WooCommmerce",
    skill2: "Shopify (Learning)",
    skill3: "Product Management",
    skill4: "Payment Integration",
    image: Wordpressgold,
  },
  {
    title: "Tools",
    skill1: "Git & GitHub",
    skill2: "VS Code",
    skill3: "Chrome DevTools",
    skill4: "Photoshop",
    image: Tools,
  },
];

function Skills() {
  return (
    <section
      className="bg-[#0A0A0A] pl-[40px] py-[40px] border-t border-[#B88A46]"
      id="Skills"
    >
      <div className="project-content">
        <h2 className="font-['Cormorant_Garamond'] text-[20px] font-normal tracking-[2px] text-white leading-none pb-[20px] uppercase">
          development skills
        </h2>
      </div>
      <div className="flex gap-10 pl-[40px]">
        {skills.map((skill) => (
          <div className="gap-1">
            <a className="flex gap-3" key={skill.image}>
              <img className="max-w-12" src={skill.image} alt="FrontEnd Logo" />
              <h4 className="text-white text-[14px] uppercase pt-[6px] tracking-[2px]">
                {skill.title}
              </h4>
            </a>

            <div className="text-white">
              <ul class="list-disc list-outside pl-5 space-y-2 text-[13px] pt-[15px] pl-[70px] tracking-[1px]">
                <li>{skill.skill1}</li>
                <li>{skill.skill2}</li>
                <li>{skill.skill3}</li>
                <li>{skill.skill4}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
