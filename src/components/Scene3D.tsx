import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Scene3DProps {
  skills: string[];
}

/* ============================================================
   TYPES
============================================================ */

interface SkillSphereProps {
  skills: string[];
}

/* ============================================================
   GENERATE SPHERICAL POSITIONS
============================================================ */

function generateNodes(radius: number, count: number): THREE.Vector3[] {
  if (count <= 0) {
    return [];
  }

  if (count === 1) {
    return [new THREE.Vector3(0, 0, radius)];
  }

  const nodes: THREE.Vector3[] = [];

  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;

    const r = Math.sqrt(
      Math.max(0, 1 - y * y)
    );

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

/* ============================================================
   SKILL CARD
============================================================ */

const SkillCard = ({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) => {
  const accentColors = [
    '#22D3EE',
    '#8B5CF6',
    '#F5A623',
    '#22D3EE',
    '#8B5CF6',
    '#F5A623',
  ];

  const accent = accentColors[index % accentColors.length];

  return (
    <div
      style={{
        minWidth: '110px',
        padding: '9px 13px',
        borderRadius: '10px',

        background:
          'linear-gradient(135deg, rgba(18,22,28,0.97), rgba(11,15,20,0.94))',

        border: `1px solid ${accent}55`,

        boxShadow: `
          0 8px 25px rgba(0,0,0,0.35),
          0 0 18px ${accent}12
        `,

        backdropFilter: 'blur(10px)',

        fontFamily:
          "'JetBrains Mono', 'Fira Code', monospace",

        pointerEvents: 'none',

        userSelect: 'none',

        transform: 'translateZ(0)',
      }}
    >
      {/* Accent */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: accent,
            boxShadow: `0 0 8px ${accent}`,
            flexShrink: 0,
          }}
        />

        <span
          style={{
            color: '#F6F5F2',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          {skill}
        </span>
      </div>

      {/* Small developer indicator */}
      <div
        style={{
          marginTop: '5px',
          marginLeft: '15px',
          color: '#6B7280',
          fontSize: '9px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Technology
      </div>
    </div>
  );
};

/* ============================================================
   SPHERE
============================================================ */

const SkillSphere = ({ skills }: SkillSphereProps) => {
  const groupRef = useRef<THREE.Group>(null);

  const radius = 2.15;

  /* Generate positions only when skills change */
  const nodes = useMemo(
    () => generateNodes(radius, skills.length),
    [skills, radius]
  );

  /* ==========================================================
     CONNECTIONS
  ========================================================== */

  const edges = useMemo(() => {
    const result: [THREE.Vector3, THREE.Vector3][] = [];

    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (
          i < j &&
          a.distanceTo(b) < radius * 1.15
        ) {
          result.push([a, b]);
        }
      });
    });

    return result;
  }, [nodes, radius]);

  /* ==========================================================
     ANIMATION
  ========================================================== */

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;

      groupRef.current.rotation.x =
        Math.sin(Date.now() * 0.00025) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>

      {/* ======================================================
          OUTER WIREFRAME
      ======================================================= */}

      <mesh>
        <icosahedronGeometry args={[radius, 2]} />

        <meshBasicMaterial
          color="#1E242C"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* ======================================================
          INNER GLOW SPHERE
      ======================================================= */}

      <mesh>
        <sphereGeometry args={[radius * 0.94, 32, 32]} />

        <meshBasicMaterial
          color="#0E1218"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* ======================================================
          CONNECTION LINES
      ======================================================= */}

      {edges.map(([a, b], index) => {
        const geometry =
          new THREE.BufferGeometry().setFromPoints([
            a,
            b,
          ]);

        return (
          <line
            key={`edge-${index}`}
            geometry={geometry}
          >
            <lineBasicMaterial
              color="#22D3EE"
              transparent
              opacity={0.16}
            />
          </line>
        );
      })}

      {/* ======================================================
          SKILL NODES
      ======================================================= */}

      {nodes.map((position, index) => {

        const accent =
          index % 3 === 0
            ? '#22D3EE'
            : index % 3 === 1
              ? '#8B5CF6'
              : '#F5A623';

        return (
          <group
            key={`skill-${index}`}
            position={position}
          >

            {/* Node */}
            <mesh>
              <sphereGeometry
                args={[0.065, 16, 16]}
              />

              <meshBasicMaterial
                color={accent}
              />
            </mesh>

            {/* Node Glow */}
            <mesh>
              <sphereGeometry
                args={[0.12, 16, 16]}
              />

              <meshBasicMaterial
                color={accent}
                transparent
                opacity={0.08}
              />
            </mesh>

            {/* ==================================================
                3D SKILL CARD
            =================================================== */}

            <Html
              center
              distanceFactor={7}
              zIndexRange={[10, 20]}
              transform
              sprite
            >
              <SkillCard
                skill={skills[index]}
                index={index}
              />
            </Html>

          </group>
        );
      })}

    </group>
  );
};

/* ============================================================
   MAIN SCENE
============================================================ */

const Scene3D = ({ skills }: Scene3DProps) => {
  return (
    <div
      className="
        relative
        w-full
        min-h-[420px]
        h-[420px]
        sm:h-[460px]
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 50,
        }}

        dpr={[1, 2]}
      >

        {/* ====================================================
            LIGHTING
        ===================================================== */}

        <ambientLight intensity={0.7} />

        {/* ====================================================
            3D SPHERE
        ===================================================== */}

        <SkillSphere skills={skills} />

        {/* ====================================================
            CONTROLS
        ===================================================== */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}

          autoRotate
          autoRotateSpeed={0.35}

          rotateSpeed={0.6}

          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />

      </Canvas>

      {/* ======================================================
          TOP LEFT LABEL
      ======================================================= */}

      <div
        className="
          absolute
          top-4
          left-4
          px-3
          py-1.5
          rounded-full
          bg-[#12161C]/80
          border
          border-[#242B35]
          backdrop-blur-md
          pointer-events-none
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.15em]
            text-gray-500
          "
        >
          Tech Stack
        </span>
      </div>

      {/* ======================================================
          TOP RIGHT STATUS
      ======================================================= */}

      <div
        className="
          absolute
          top-4
          right-4
          flex
          items-center
          gap-2
          px-3
          py-1.5
          rounded-full
          bg-[#12161C]/80
          border
          border-[#242B35]
          backdrop-blur-md
          pointer-events-none
        "
      >
        <span
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-400
            animate-pulse
          "
        />

        <span className="text-[10px] text-gray-500">
          Interactive
        </span>
      </div>

      {/* ======================================================
          BOTTOM HINT
      ======================================================= */}

      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          px-3
          py-1.5
          rounded-full
          bg-[#12161C]/80
          border
          border-[#242B35]
          backdrop-blur-md
          pointer-events-none
          whitespace-nowrap
        "
      >
        <span className="text-[10px] text-gray-500">
          Drag to explore
        </span>
      </div>

    </div>
  );
};

export default Scene3D;