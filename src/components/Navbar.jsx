import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import RubberDuck from "./RubberDuck";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <div>
      {links.map(({ href, label }) => (
        <a key={href} href={href} className="px-5">
          {label}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="p-4 flex justify-between items-center">
        <a href="/">Yann.Dev</a>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
