"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
      // Set initial positions BEFORE making visible to prevent jumps
      const buttons = Array.from(buttonsRef.current!.children);

      // Set initial state (invisible, offset position)
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 40, opacity: 0 });
      gsap.set(descriptionRef.current, { y: 40, opacity: 0 });
      buttons.forEach((btn) => {
        gsap.set(btn, { y: 30, opacity: 0, scale: 0.95 });
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Smooth animations with fromTo - immediateRender false prevents initial flash
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power2.out",
        immediateRender: false,
      })
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.7"
        )
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.6"
        );

      if (buttonsRef.current && buttons.length > 0) {
        tl.to(
          buttons,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.5"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-32 pb-20"
    >
      <div className="container-layout max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-black leading-tight opacity-100"
          >
            Hi, I'm <span className="text-[#072800]">Your Name</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-2xl sm:text-3xl text-[#4A4A4A] font-normal mb-6 opacity-100"
          >
            Full Stack Developer & Creative Problem Solver
          </p>
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-[#4A4A4A] mb-16 leading-relaxed opacity-100"
          >
            I build beautiful, functional, and user-centered digital experiences
          </p>
        </div>
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-100"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-12 py-5 sm:px-14 sm:py-6 bg-[#072800] text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-[#0a3a00] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-12 py-5 sm:px-14 sm:py-6 border-2 border-[#072800] text-[#072800] rounded-lg font-semibold text-base sm:text-lg hover:bg-[#072800] hover:text-white transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
