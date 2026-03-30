const Name = () => {
  return (
    <div className="text-[160px] font-header leading-30 mb-10">
      <h1>YANN</h1>
      <h1>FERNANDEZ PUIG</h1>
    </div>
  );
};

const Desc = () => {
  return (
    <div className="text-2xl font-header uppercase">
      <h1>3rd year Computer Engineering student · EPITA</h1>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-screen p-20 flex flex-col justify-between bg-amber-300">
      <div></div>
      <div className="m-10">
        <Name />
        <Desc />
      </div>
    </div>
  );
};

export default Hero;
