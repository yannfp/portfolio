import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import Navbar from "./components/Navbar";
import RubberDuck from "./components/RubberDuck";

const App = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
    </div>
  );
};

export default App;
