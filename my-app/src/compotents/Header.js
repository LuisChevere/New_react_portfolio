import React from "react";

export default function Header() {
  return {
    <header id="nav" className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto ">
      <h1 id="navName"  href="#about">
            Luis Chevere </h1>
        <nav id='navList' className=" bg-gray-800 border-0 py-1 px-3  rounded text-base mt-4 md:mt-0">
          <a href="#about" className="mr-5 hover:text-white">
            About Me
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
      </div>
    </header>
  };
}
