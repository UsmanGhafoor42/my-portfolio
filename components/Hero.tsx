"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleBgRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      !subtitleRef.current ||
      !descriptionRef.current ||
      !buttonsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const buttons = Array.from(buttonsRef.current!.children);

      gsap.set([titleRef.current, titleBgRef.current], { opacity: 0, y: 20 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
      buttons.forEach((btn) => {
        gsap.set(btn, { opacity: 0, y: 20 });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power1.out", duration: 0.6 },
      });

      tl.to([titleRef.current, titleBgRef.current], { opacity: 1, y: 0 })
        .to(subtitleRef.current, { opacity: 1, y: 0 }, "-=0.4")
        .to(descriptionRef.current, { opacity: 1, y: 0 }, "-=0.4")
        .to(buttons, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-[#F5F5DC] relative overflow-hidden"
    >
      <div className="container-layout max-w-7xl mx-auto">
        <div className="relative">
          {/* Background PORTFOLIO text - layered effect */}
          <div
            ref={titleBgRef}
            className="absolute -top-20 -left-4 sm:-left-8 md:-left-12 text-[100px] sm:text-[200px] md:text-[300px] lg:text-[250px] font-serif font-bold text-[#1a4d2e]/5 leading-none select-none pointer-events-none opacity-100"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              transform: "rotate(0deg)",
            }}
          >
            EURO
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-10 md:gap-12 lg:gap-12 items-center relative">
            <div>
              <h1
                ref={titleRef}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] font-serif font-bold mb-6! sm:mb-6! md:mb-8! lg:mb-10! text-[#1a4d2e] leading-none opacity-100"
              >
                PORTFOLIO
              </h1>
              <p
                ref={subtitleRef}
                className="text-2xl sm:text-3xl font-serif font-semibold mb-6! sm:mb-8! md:mb-10! text-[#1a4d2e] opacity-100"
              >
                Hello, I'm Euro Developers
              </p>
              <p
                ref={descriptionRef}
                className="text-base sm:text-lg text-[#2d5a3d] mb-10! sm:mb-12! md:mb-14! lg:mb-16! xl:mb-18 ! leading-relaxed opacity-100 max-w-lg"
              >
                I love design and anything related to development. I approach
                problems in a rational and pragmatic way and seek the simplest
                and most functional solutions possible.
              </p>
              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row gap-4 opacity-100"
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-[#FF8C42] text-white rounded-full font-medium text-base hover:bg-[#FF7A2E] transition-all"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border-2 border-[#1a4d2e] text-[#1a4d2e] rounded-full font-medium text-base hover:bg-[#1a4d2e] hover:text-white transition-all"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Image section with orange background */}
            <div className="hidden lg:block relative opacity-40">
              <div className="relative">
                <div className="bg-[#FF8C42] p-6 rounded-3xl shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center relative">
                    {/* <div className="text-8xl">👨‍💻</div> */}
                    <Image
                      src="/images/logo.png"
                      alt="Euro Developers"
                      width={300}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
