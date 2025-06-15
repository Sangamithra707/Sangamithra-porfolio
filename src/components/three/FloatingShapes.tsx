import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, geometry }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-1, 1]}
    >
      <mesh ref={meshRef} position={position}>
        <primitive object={geometry} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          wireframe={Math.random() > 0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  const shapes = [
    {
      position: [-4, 2, -2],
      color: '#8B5CF6',
      geometry: new THREE.BoxGeometry(1, 1, 1),
    },
    {
      position: [4, -2, -1],
      color: '#A855F7',
      geometry: new THREE.SphereGeometry(0.7, 32, 32),
    },
    {
      position: [-3, -3, -3],
      color: '#C084FC',
      geometry: new THREE.OctahedronGeometry(0.8),
    },
    {
      position: [3, 3, -2],
      color: '#DDA0DD',
      geometry: new THREE.TetrahedronGeometry(0.9),
    },
    {
      position: [0, -4, -4],
      color: '#E6E6FA',
      geometry: new THREE.DodecahedronGeometry(0.6),
    },
    {
      position: [-2, 4, -1],
      color: '#9370DB',
      geometry: new THREE.IcosahedronGeometry(0.7),
    },
  ];

  return (
    <group>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          color={shape.color}
          geometry={shape.geometry}
        />
      ))}
    </group>
  );
};

export default FloatingShapes;