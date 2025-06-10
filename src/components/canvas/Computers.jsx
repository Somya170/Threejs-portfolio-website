import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [model, setModel] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await useGLTF.preload("/desktop_pc/scene.gltf");
        setModel(gltf);
      } catch (err) {
        console.warn("Failed to load desktop model:", err);
        setError(true);
      }
    };

    loadModel();
  }, []);

  if (error || !model) {
    // Fallback: Simple geometric computer representation
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        
        {/* Simple computer representation */}
        <group scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
          {/* Monitor */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 2, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          
          {/* Screen */}
          <mesh position={[0, 0, 0.11]}>
            <boxGeometry args={[2.8, 1.8, 0.01]} />
            <meshStandardMaterial color="#000" emissive="#915EFF" emissiveIntensity={0.3} />
          </mesh>
          
          {/* Base */}
          <mesh position={[0, -1.2, 0]}>
            <cylinderGeometry args={[0.3, 0.5, 0.3, 8]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          
          {/* Stand */}
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
            <meshStandardMaterial color="#666" />
          </mesh>
        </group>
      </mesh>
    );
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => {
        console.warn("Canvas error:", error);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;