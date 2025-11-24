"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "HTML/CSS",
  "JavaScript",
];

const backendSkills = [
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial positions BEFORE animation to prevent jumps
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      gsap.set(cardRef.current, { y: 60, opacity: 0 });

      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32">
      <div className="container-layout max-w-5xl mx-auto flex flex-col gap-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-16 opacity-100"
        >
          Skills
        </h2>
        <div
          ref={cardRef}
          className="bg-[#FAFAFA] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28 shadow-lg border-2 border-[#072800]/10 opacity-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8 lg:mb-10">
                Frontend
              </h3>
              <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill} skill={skill} percentage={85} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8 lg:mb-10">
                Backend & Tools
              </h3>
              <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill} skill={skill} percentage={80} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    gsap.fromTo(
      progress,
      { width: "0%" },
      {
        width: `${percentage}%`,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [percentage]);

  return (
    <div
      ref={barRef}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5"
    >
      <span className="text-base sm:text-lg lg:text-xl font-semibold text-black">
        {skill}
      </span>
      <div className="w-full sm:w-40 lg:w-48 h-3 sm:h-4 bg-[#072800]/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-[#072800] rounded-full transition-all"
        ></div>
      </div>
    </div>
  );
}
