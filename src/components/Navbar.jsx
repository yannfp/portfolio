import React, { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavLinks = ({ isScrolled }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
  };

  return (
    <div
      className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-10" : "gap-30"}`}
    >
      {links.map(({ href, label }, index) => (
        <a
          key={href}
          href={href}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            "--x": `${coords.x}px`,
            "--y": `${coords.y}px`,
          }}
          className="relative overflow-hidden inline-block px-5 py-1.5 cursor-pointer rounded-2xl font-header
                     group transition-all duration-500 border border-transparent hover:border-white-snow"
        >
          <span
            className="absolute w-0 h-0 bg-white rounded-full 
                       transition-all duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2
                       top-(--y) left-(--x)
                       group-hover:w-55 group-hover:h-55"
          ></span>

          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#050505]">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

const Bar = ({ isScrolled }) => {
  return (
    <div
      className={`
        mx-auto flex justify-center items-center transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "glass-morphism px-4 py-2 w-full max-w-2xl rounded-4xl border border-white/20 shadow-lg"
            : "w-full max-w-full px-8 py-4 rounded-none border-transparent"
        }
      `}
    >
      <NavLinks isScrolled={isScrolled} />
    </div>
  );
};

const Navbar = ({ isExternalScroll }) => {
  const isScrolled = isExternalScroll;

  return (
    <nav
      className={`
        fixed left-0 right-0 mx-auto z-50 pointer-events-none transition-all duration-500
        ${isScrolled ? "top-6" : "top-0"}
      `}
    >
      <div className="pointer-events-auto w-full">
        <Bar isScrolled={isScrolled} />
      </div>
    </nav>
  );
};

export default Navbar;
