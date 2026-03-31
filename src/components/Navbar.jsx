import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    <div className="flex gap-10">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            "--x": `${coords.x}px`,
            "--y": `${coords.y}px`,
          }}
          className="relative overflow-hidden inline-block px-5 py-1.5 cursor-pointer rounded-2xl 
                     group transition-all duration-300 border border-transparent hover:border-white-snow"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

const Bar = () => {
  return (
    <div className="glass-morphism px-4 py-2 flex justify-center items-center w-2xl rounded-4xl">
      <NavLinks />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none mt-6">
        <div className="pointer-events-auto w-full max-w-2xl">
          <Bar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
