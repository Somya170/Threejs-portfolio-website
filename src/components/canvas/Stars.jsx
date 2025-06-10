import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#915EFF'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingParticles = () => {
  const ref = useRef();
  const [particles] = useState(() => random.inSphere(new Float32Array(1500), { radius: 2 }));

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <FloatingParticles />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;