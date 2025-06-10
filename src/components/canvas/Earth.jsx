import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const [model, setModel] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await useGLTF.preload("/planet/scene.gltf");
        setModel(gltf);
      } catch (err) {
        console.warn("Failed to load earth model:", err);
        setError(true);
      }
    };

    loadModel();
  }, []);

  if (error || !model) {
    // Fallback: Simple sphere earth
    return (
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial 
          color="#4a90e2" 
          emissive="#915EFF" 
          emissiveIntensity={0.1}
          roughness={0.7}
        />
      </mesh>
    );
  }

  return (
    <primitive 
      object={model.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onError={(error) => {
        console.warn("Earth Canvas error:", error);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;