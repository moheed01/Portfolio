import { Canvas, useFrame } from '@react-three/fiber';
import type { RootState } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function GlassTower({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.15;
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.08;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.3;
  });

  return (
    <group ref={ref} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 4, 0.15]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={2}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.26, 4.06, 0.17]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.24, 4.04, 0.16]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.05}
          metalness={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function GlassCube({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 + delay;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3 + delay;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.4;
  });

  return (
    <group ref={ref} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={2}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.66, 1.66, 1.66]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.35}
          roughness={0.1}
          metalness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function GlassBridge({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={ref} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5, 0.1, 0.6]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={2}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[5.06, 0.16, 0.66]} />
        <meshStandardMaterial
          color="#B01E4F"
          emissive="#B01E4F"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function GlassArchitecture() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="absolute inset-0 z-10"
    >
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 10, 7]} intensity={1.8} color="#ffffff" castShadow />
      <pointLight position={[-6, -4, 4]} intensity={1.2} color="#B01E4F" />
      <pointLight position={[6, -4, -4]} intensity={1.2} color="#D94F7A" />
      <pointLight position={[0, 6, 0]} intensity={0.8} color="#C9A96A" />

      <GlassTower position={[-4, 0, -3]} color="#B01E4F" delay={0} />
      <GlassTower position={[4, 0, -5]} color="#D94F7A" delay={1} />
      <GlassTower position={[0, 0, -7]} color="#B01E4F" delay={2} />
      <GlassTower position={[-3, 0, -9]} color="#D94F7A" delay={3} />

      <GlassCube position={[3, 1, -4]} color="#B01E4F" delay={1.5} />
      <GlassCube position={[-3, 0.5, -6]} color="#D94F7A" delay={2.5} />

      <GlassBridge position={[0, -2, -6]} />
      <GlassBridge position={[0, -3.5, -9]} />
    </Canvas>
  );
}
