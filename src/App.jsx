import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import Navbar from "./components/Navbar";
import RubberDuck from "./components/RubberDuck";

const App = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />

      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />

          <RubberDuck />

        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>

      <Loader />
    </div>
  );
};

export default App;
