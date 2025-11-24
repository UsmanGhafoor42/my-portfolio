"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: "✉",
    title: "Email",
    description: "eurodeveloper1999@gmail.com",
    href: "mailto:eurodeveloper1999@gmail.com",
  },
  {
    icon: "in",
    title: "LinkedIn",
    description: "Connect with me",
    href: "https://www.linkedin.com/in/muhammadshaharyarshafique/",
    isIcon: true,
  },
  {
    icon: "</>",
    title: "GitHub",
    description: "View my code",
    href: "https://github.com/Shaharyarkhan123",
    isIcon: true,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardRef.current || !contactCardsRef.current)
      return;

    const ctx = gsap.context(() => {
      const cards = Array.from(contactCardsRef.current!.children);

      // Set initial positions BEFORE animation to prevent jumps
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      gsap.set(cardRef.current, { y: 60, opacity: 0 });
      cards.forEach((card) => {
        gsap.set(card, { x: -40, opacity: 0, scale: 0.95 });
      });

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

      gsap.to(cards, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: contactCardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-white">
      <div className="container-layout max-w-3xl mx-auto flex flex-col gap-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-16 text-center opacity-100"
        >
          Get In Touch
        </h2>
        <div
          ref={cardRef}
          className="bg-[#FAFAFA] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28 shadow-lg border-2 border-[#072800]/10 opacity-100"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#4A4A4A] mb-10 sm:mb-12 lg:mb-16 text-center leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div
            ref={contactCardsRef}
            className="space-y-5 sm:space-y-6 lg:space-y-8 opacity-100"
          >
            {contactMethods.map((method, index) => (
              <ContactCard key={index} method={method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ method }: { method: (typeof contactMethods)[0] }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-5 sm:gap-6 lg:gap-8 px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8 bg-white rounded-2xl border-2 border-[#072800]/10 hover:border-[#072800]/30 transition-all group shadow-sm hover:shadow-lg"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#072800] rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl group-hover:scale-110 transition-transform shrink-0">
        <span className="font-bold">{method.icon}</span>
      </div>
      <div className="grow">
        <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-1 sm:mb-2">
          {method.title}
        </p>
        <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg">
          {method.description}
        </p>
      </div>
    </a>
  );
}
