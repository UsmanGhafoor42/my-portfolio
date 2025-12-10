"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-32 bg-[#F5F5DC]">
      <div className="container-layout max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1a4d2e] mb-20 sm:mb-24 md:mb-28 lg:mb-32 opacity-100"
        >
          About Me
        </h2>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        <div
          ref={cardRef}
          className="bg-white rounded-3xl px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20 shadow-lg border-2 border-[#1a4d2e]/10 opacity-100"
        >
          <p className="text-base sm:text-lg text-[#2d5a3d] mb-6 leading-relaxed">
            I'm a passionate developer with a keen eye for design and a love for
            creating meaningful digital experiences. With expertise in modern
            web technologies, I bring ideas to life through clean code and
            thoughtful design.
          </p>
          <p className="text-base sm:text-lg text-[#2d5a3d] mb-8 leading-relaxed">
            My approach combines technical excellence with user-centered design
            principles, ensuring that every project I work on is both beautiful
            and functional.
          </p>
          <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t-2 border-[#072800]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
              Education & Experience
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-[#1a4d2e] mb-2 flex items-center gap-2">
                  Master's in Research Computer and System Engineering
                </h4>
                <p className="text-base text-[#2d5a3d]">
                  Technische Universität Ilmenau • Continuing...
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a4d2e] mb-2 flex items-center gap-2">
                  Bachelors in Software Engineering
                </h4>
                <p className="text-base text-[#2d5a3d]">
                  Iqra University • 2023
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a4d2e] mb-2 flex items-center gap-2">
                  Frontend Developer
                </h4>
                <p className="text-base text-[#2d5a3d]">
                  Ausbildungs Basis • 07/2025 – 10/2025
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a4d2e] mb-2 flex items-center gap-2">
                  Software Developer
                </h4>
                <p className="text-base text-[#2d5a3d]">
                  DIGILAXY LTD • 06/2023 – 04/2024
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a4d2e] mb-2 flex items-center gap-2">
                  Software Developer Intern
                </h4>
                <p className="text-base text-[#2d5a3d]">
                  IT RETINA • 11/2022 – 01/2023
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
