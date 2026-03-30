import { ArrowUpRight } from "lucide-react";

const Name = () => {
  return (
    <div className="text-[160px] leading-30 mb-10">
      <h1>YANN</h1>
      <h1>FERNANDEZ PUIG</h1>
    </div>
  );
};

const Desc = () => {
  return (
    <div className="text-2xl uppercase">
      <h1>3rd year Computer Engineering student · EPITA</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <a
      className="glass-morphism
      transition-all duration-300 ease-out
      hover:shadow-[0_20px_50px_rgba(255,159,28,0.2)]
      hover:-translate-y-1
      active:scale-95"
    >
      <div className="flex items-center px-7 py-3 gap-3 text-[#050505]">
        <span className="uppercase font-header font-bold text-[20px]">
          Get in Touch
        </span>

        <div className="bg-[#F8FBF8] rounded-full p-1 flex items-center justify-center">
          <ArrowUpRight size={20} className="text-[#050505]" />
        </div>
      </div>
    </a>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-screen p-20 flex flex-col justify-between bg-mango-pop">
      <div></div>

      <div className="m-10">
        <Name />

        <div className="flex justify-between">
          <Desc />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
