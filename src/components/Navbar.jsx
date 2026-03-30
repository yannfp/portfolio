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

const Bar = () => {
  return (
    <div className="glass-morphism p-4 flex justify-center items-center w-2xl rounded-4xl">
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
