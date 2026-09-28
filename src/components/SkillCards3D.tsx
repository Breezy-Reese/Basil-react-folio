import React, { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Layers,
  GitBranch,
  Shield,
} from 'lucide-react';

const CARD_W = 210;
const CARD_H = 290;

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    color: '#22D3EE',
    description:
      'Responsive interfaces built from reusable components, with clean state handling.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: '#A78BFA',
    description:
      'REST APIs, authentication and business logic that keep applications reliable.',
    tags: ['Node.js', 'Express', 'PHP'],
  },
  {
    icon: Database,
    title: 'Databases',
    color: '#F5A623',
    description:
      'Schemas, queries and relationships designed to keep data fast and organised.',
    tags: ['MongoDB', 'MySQL'],
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    color: '#34D399',
    description:
      'Complete applications where the interface, API and database work as one.',
    tags: ['APIs', 'Auth', 'Deployment'],
  },
  {
    icon: GitBranch,
    title: 'Dev Tools',
    color: '#60A5FA',
    description:
      'Version control and automation so code is tracked, tested and shipped smoothly.',
    tags: ['Git', 'GitHub', 'Docker', 'CI/CD'],
  },
  {
    icon: Shield,
    title: 'Security',
    color: '#FB7185',
    description:
      'Secure sign-in, safer APIs and networking basics behind every build.',
    tags: ['Web Security', 'Networking'],
  },
];

const STEP = 360 / skills.length;
const RADIUS = Math.round(CARD_W / 2 / Math.tan(Math.PI / skills.length)) + 14;
const DESIGN_WIDTH = 470;
const STAGE_HEIGHT = 350;

const SkillCards3D = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angle = useRef(0);
  const hovering = useRef(false);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [scale, setScale] = useState(1);

  // Shrink the whole scene to fit narrow screens
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => setScale(Math.min(1, el.clientWidth / DESIGN_WIDTH));
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-rotation + fading of cards that face away
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;

      if (!reduceMotion && !hovering.current && !dragging.current) {
        angle.current -= delta * 14;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angle.current}deg)`;
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const facing = Math.cos(((index * STEP + angle.current) * Math.PI) / 180);
        card.style.opacity = String(0.3 + 0.7 * Math.max(0, facing));
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    angle.current += (e.clientX - lastX.current) * 0.45;
    lastX.current = e.clientX;
  };

  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full select-none"
      style={{
        height: STAGE_HEIGHT * scale,
        touchAction: 'pan-y',
        cursor: 'grab',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
      }}
    >
      {/* Glow under the cards */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 h-10 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-2xl" />

      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: CARD_W,
          height: CARD_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
          perspective: 1100,
        }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-8deg)' }}
        >
          <div
            ref={ringRef}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="absolute inset-0"
                  style={{
                    transform: `rotateY(${index * STEP}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div
                    className="flex h-full w-full flex-col rounded-2xl border p-5"
                    style={{
                      background:
                        'linear-gradient(160deg, #151c26 0%, #0c1117 100%)',
                      borderColor: `${skill.color}55`,
                      boxShadow: `0 18px 45px -18px ${skill.color}66`,
                    }}
                  >
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${skill.color}1F`,
                        color: skill.color,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <h4 className="text-lg font-semibold text-white">
                      {skill.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {skill.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border px-2 py-1 text-[11px]"
                          style={{
                            color: skill.color,
                            borderColor: `${skill.color}40`,
                            backgroundColor: `${skill.color}12`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCards3D;
