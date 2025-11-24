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
    <section ref={sectionRef} id="about" className="py-32">
      <div className="container-layout max-w-5xl mx-auto flex flex-col gap-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-16 opacity-100"
        >
          About Me
        </h2>
        <div
          ref={cardRef}
          className="bg-[#FAFAFA] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28 shadow-lg border-2 border-[#072800]/10 opacity-100"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] mb-6 sm:mb-8 leading-relaxed">
            I'm a passionate developer with a keen eye for design and a love for
            creating meaningful digital experiences. With expertise in modern
            web technologies, I bring ideas to life through clean code and
            thoughtful design.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] mb-8 sm:mb-10 leading-relaxed">
            My approach combines technical excellence with user-centered design
            principles, ensuring that every project I work on is both beautiful
            and functional.
          </p>
          <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t-2 border-[#072800]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
              Education & Experience
            </h3>
            <div className="space-y-5 sm:space-y-6">
              <div className="pb-4 sm:pb-5">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Master's in Research Computer and System Engineering
                </h4>

                <p className="text-base sm:text-lg text-[#4A4A4A]">
                  Technische Universität Ilmenau • Continuing...
                </p>
              </div>
              <div className="pb-4 sm:pb-5">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Bachelors in Software Engineering
                </h4>
                <p className="text-base sm:text-lg text-[#4A4A4A]">
                  Iqra University • 2023
                </p>
              </div>
              <div className="pb-4 sm:pb-5">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Frontend Developer
                </h4>
                <p className="text-base sm:text-lg text-[#4A4A4A]">
                  Ausbildungs Basis • 07/2025 – 10/2025
                </p>
              </div>
              <div className="pb-4 sm:pb-5">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Software Developer
                </h4>
                <p className="text-base sm:text-lg text-[#4A4A4A]">
                  DIGILAXY LTD • 06/2023 – 04/2024
                </p>
              </div>
              <div className="pb-4 sm:pb-5">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Software Developer Intern
                </h4>
                <p className="text-base sm:text-lg text-[#4A4A4A]">
                  IT RETINA • 11/2022 – 01/2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
