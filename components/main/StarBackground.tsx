"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error: maath/random library type definitions are incomplete, but this usage is safe for our case.
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three';

// Define a specific type for props, assuming it's used with <Points> properties
const StarBackground = (props: React.ComponentProps<typeof Points>) => {
  // Use a more specific type for the ref (Points from Three.js)
  const ref: React.RefObject<THREE.Points> = useRef<THREE.Points>(null);
  
  // random.inSphere generates a Float32Array
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Rotate the points over time
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color="#fff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false} // Fixed typo (dethWrite -> depthWrite)
      />
    </Points>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;



