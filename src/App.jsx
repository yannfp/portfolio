import { useState, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="blur-top-overlay" />

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto overscroll-none"
      >
        <Navbar isExternalScroll={scrollTop > 50} />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </div>
  );
};

export default App;
