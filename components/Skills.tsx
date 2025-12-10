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
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(cardRef.current, { opacity: 0, y: 30 });

      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
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
    <section ref={sectionRef} id="skills" className="py-32 bg-[#F5F5DC]">
      <div className="container-layout max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1a4d2e] mb-20 sm:mb-24 md:mb-28 lg:mb-32 opacity-100"
        >
          Technical Skills
        </h2>
        <div
          ref={cardRef}
          className="bg-white rounded-3xl px-8 py-10 sm:px-12 sm:py-14 lg:px-20 lg:py-20 shadow-lg border-2 border-[#1a4d2e]/10 opacity-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1a4d2e] mb-8 flex items-center gap-2">
                Frontend
              </h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-[#1a4d2e]">
                      {skill}
                    </span>
                    <div className="w-40 h-2 bg-[#1a4d2e]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FF8C42] rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1a4d2e] mb-8 flex items-center gap-2">
                Backend & Tools
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-[#1a4d2e]">
                      {skill}
                    </span>
                    <div className="w-40 h-2 bg-[#1a4d2e]/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FF8C42] rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
