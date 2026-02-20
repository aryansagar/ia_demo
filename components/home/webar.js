"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Model({ speed }) {
  const { scene, animations } = useGLTF("/webar/generatorCompressed.glb");
  const mixer = useRef();
  const clock = new THREE.Clock();

  scene.scale.set(1.5, 1.5, 1.5);

  if (!mixer.current && animations.length) {
    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }

  useFrame(() => {
    if (mixer.current) {
      mixer.current.update(clock.getDelta() * speed);
    }
  });

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function WebARPage() {
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);

  const handlePlayPause = () => {
    const newPaused = !paused;
    setPaused(newPaused);
    setSpeed(newPaused ? 0 : 1);
  };

  return (
    <div className="grid md:grid-cols-2">

      {/* LEFT - 3D */}
      <div className="relative h-[400px] md:h-[400px]">

        <Canvas
          camera={{ position: [0, 3, 6], fov: 50 }}
          className="w-full outline-none"
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model speed={speed} />
          <OrbitControls />
        </Canvas>

        {/* Overlay Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">

          <button
            onClick={handlePlayPause}
            className="bg-[#5A30D7] text-white text-center px-4 py-1 rounded-md text-sm hover:opacity-90 transition"
          >
            {paused ? "Play" : "Pause"}
          </button>

          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      {/* RIGHT - CONTENT */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-4">
        <h3 className="text-3xl font-bold text-[#5A30D7] mb-4">
          iSimulo
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6 font-freesans">
          A simulated digital twin is a virtual model that uses simulations
          and real-time data to predict, test, and optimize system behavior —
          enabling smarter decisions, improved efficiency, and reduced
          operational risks.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex gap-2 font-freesans">
            <span className="text-[#5A30D7] font-bold">•</span>
            Virtual modeling of assets, processes, and systems
          </li>
          <li className="flex gap-2 font-freesans">
            <span className="text-[#5A30D7] font-bold">•</span>
            Scenario testing and “what-if” analysis
          </li>
          <li className="flex gap-2 font-freesans">
            <span className="text-[#5A30D7] font-bold">•</span>
            Performance prediction under varying conditions
          </li>
          <li className="flex gap-2 font-freesans">
            <span className="text-[#5A30D7] font-bold">•</span>
            Design validation before physical deployment
          </li>
        </ul>

        <button className="bg-[#5A30D7] text-white px-6 py-2 rounded-sm w-fit hover:opacity-90 transition font-freesans">
          Know more
        </button>
      </div>

    </div>
  )
}