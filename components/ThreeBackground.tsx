import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<any>(null);
  
  // Generate random points on a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} rotation={[0, 0, Math.PI / 4]} {...props}>
      <PointMaterial
        transparent
        color="#b026ff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CyanStars(props: any) {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 2; // wider orbit
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 15;
      ref.current.rotation.y += delta / 20;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} rotation={[0, 0, Math.PI / 4]} {...props}>
      <PointMaterial
        transparent
        color="#00f3ff"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <CyanStars />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;