import Logo from "../assets/logos/LC-white.png";
import Github from "../assets/logos/Github.png";
import LinkedIn from "../assets/logos/LinkedIn.png";
import Instagram from "../assets/logos/Instagram.png";

import ContactModal from "../components/ContactModal";
import { useState } from "react";

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

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer
      className="bg-[#0A0A0A] flex pl-10 pr-5 py-5 text-white text-[12px] gap-70 "
      id="footer"
    >
      <img
        id="footer-logo"
        className="w-[50px] h-[40px]"
        src={Logo}
        alt="Lc white logo"
      />

      <div id="footer-links">
        <a
          href="#hero"
          id="footer-link"
          className="flex md:inline-flex py-4 px-5 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
        >
          <span>home</span>
        </a>

        <a
          href="#projects"
          id="footer-link"
          className="flex md:inline-flex py-4 px-5 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
        >
          <span>Projects</span>
        </a>

        <a
          href="#about"
          id="footer-link"
          className="flex md:inline-flex py-4 px-5 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
        >
          <span>About</span>
        </a>

        <a
          href="#skills"
          id="footer-link"
          className="flex md:inline-flex py-4 px-5 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
        >
          <span>Skills</span>
        </a>

        <a
          id="pointer"
          id="footer-link"
          onClick={() => setIsContactOpen(true)}
          className="curser-pointer flex md:inline-flex py-4 px-5 items-center hover:text-[#B88A46] active:text-[#B88A46] uppercase"
        >
          <span>Contact</span>
        </a>

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>

      <div id="footer-socials" className="inline-flex space-x-5 pt-[12px]">
        {socials.map((social) => (
          <a href={social.link} target="blank">
            <img className="w-5 h-5" src={social.image} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
