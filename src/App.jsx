import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full z-10 h-32 pointer-events-none transition-opacity duration-500"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
