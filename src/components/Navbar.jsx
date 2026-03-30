const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <div className="flex gap-10">
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
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center m-5">
      <div className="glass-morphism p-4 flex justify-center items-center w-2xl rounded-4xl">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
