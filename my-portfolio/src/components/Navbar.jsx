import Logo from "../assets/logos/LC-logo.png";
import Github from "../assets/logos/Github.png";
import LinkedIn from "../assets/logos/LinkedIn.png";
import Instagram from "../assets/logos/Instagram.png";
import Email from "../assets/logos/Mail.png";

const socials = [
  {
    title: "Github",
    description: "Github link",
    image: Github,
    link: "https://github.com/LuisChevere",
  },
  {
    title: "LinkedIn",
    description: "LinkedIn link",
    image: LinkedIn,
    link: "https://www.linkedin.com/in/luis-chevere-4a417575",
  },
  {
    title: "Instagram",
    description: "Instagram link",
    image: Instagram,
    link: "https://www.instagram.com/a.crowleyy_/?hl=en",
  },
];

function NavBar() {
  return (
    <nav className="flex pl-10 pr-5 py-5 text-white text-[12px]">
      <img className="w-[400px]" src={Logo} alt="Lc white logo" />
      <ul class="md:px-2 ml-auto mr-5 md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
          <a
            href="#Hero"
            class="flex md:inline-flex p-4 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
          >
            <span>home</span>
          </a>
        </li>

        <li>
          <a
            href="#Projects"
            class="flex md:inline-flex p-4 items-center hover:text-[#B88A46] uppercase"
          >
            <span>projects</span>
          </a>
        </li>

        <li>
          <a
            href="#About"
            class="flex md:inline-flex p-4 items-center hover:text-[#B88A46] uppercase"
          >
            <span>about</span>
          </a>
        </li>

        <li>
          <a
            href="#Skills"
            class="flex md:inline-flex p-4 items-center hover:text-[#B88A46] uppercase"
          >
            <span>skills</span>
          </a>
        </li>

        <li>
          <a
            href="#contact"
            class="flex md:inline-flex p-4 items-center hover:text-[#B88A46] uppercase"
          >
            <span>contact</span>
          </a>
        </li>
      </ul>

      <div className="inline-flex space-x-5 pt-[12px]">
        {socials.map((social) => (
          <a href={social.link} target="blank">
            <img className="w-5 h-5" src={social.image} />
          </a>
        ))}
        <a target="blank">
          <img className="w-6 h-5" src={Email} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
