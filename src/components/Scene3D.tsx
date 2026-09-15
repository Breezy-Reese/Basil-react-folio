import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Scene3DProps {
  skills: string[];
}

function generateNodes(radius: number, count: number) {
  const nodes: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    nodes.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      )
    );
  }
  return nodes;
}

const SkillSphere = ({ skills }: { skills: string[] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 2.4;
  const nodes = generateNodes(radius, skills.length);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  nodes.forEach((a, i) => {
    nodes.forEach((b, j) => {
      if (i < j && a.distanceTo(b) < radius * 1.1) {
        edges.push([a, b]);
      }
    });
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[radius, 1]} />
        <meshBasicMaterial color="#1E242C" wireframe transparent opacity={0.4} />
      </mesh>

      {edges.map(([a, b], i) => {
        const points = [a, b];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#2DD4BF" transparent opacity={0.25} />
          </line>
        );
      })}

      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color={i % 2 === 0 ? '#F5A623' : '#22D3EE'} />
          </mesh>
          <Html center distanceFactor={8} zIndexRange={[0, 0]}>
            <div
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: "'JetBrains Mono', monospace",
                whiteSpace: 'nowrap',
                backgroundColor: 'rgba(18, 22, 28, 0.9)',
                border: '1px solid #2A323D',
                color: '#F6F5F2',
                pointerEvents: 'none',
              }}
            >
              {skills[i]}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
};

const Scene3D = ({ skills }: Scene3DProps) => {
  return (
    <div className="w-full h-full min-h-[420px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <SkillSphere skills={skills} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
