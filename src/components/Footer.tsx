import React from "react";
import { navLists } from "../data";

const Footer = () => {
  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="h-20 justify-center items-center content-center flex flex-col">
      <div className="category flex flex-1 justify-center max-sm:hidden p-10">
        {navLists.map((nav, i) => (
          <div
            key={i}
            className="nav-link px-5 text-sm lg:text-xl cursor-pointer text-gray-300 hover:text-white transition-all"
            onClick={(event) => handleSmoothScroll(event, nav.link)} // Add onClick handler
          >
            {nav.name}
          </div>
        ))}
      </div>
      Copyright ©2024; Designed by Lee
    </footer>
  );
};

export default Footer;
