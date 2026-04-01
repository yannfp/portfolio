import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
