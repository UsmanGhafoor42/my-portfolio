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

      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(cardRef.current, { opacity: 0, y: 30 });
      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 30 });
      });

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

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
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
      <div className="container-layout max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1a4d2e] mb-20 sm:mb-24 md:mb-28 lg:mb-32 text-center opacity-100"
        >
          Get In Touch
        </h2>
        <div
          ref={cardRef}
          className="bg-[#F5F5DC] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 lg:px-20 lg:py-20 shadow-lg border-2 border-[#1a4d2e]/10 opacity-100"
        >
          <p className="text-base sm:text-lg text-[#2d5a3d] mb-12 text-center leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div
            ref={contactCardsRef}
            className="flex md:flex-row flex-col gap-6 opacity-100"
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
  return (
    <a
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-6 px-8 py-6 bg-white rounded-2xl border-2 border-[#1a4d2e]/10 hover:border-[#FF8C42] transition-all group shadow-sm hover:shadow-md"
    >
      <div className="w-16 h-16 bg-[#FF8C42] rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform shrink-0">
        <span className="font-bold">{method.icon}</span>
      </div>
      <div className="grow overflow-hidden break-words">
        <p className="font-bold text-lg text-[#1a4d2e] mb-1">{method.title}</p>
        <p className="text-[#2d5a3d] text-sm sm:text-base">
          {method.description}
        </p>
      </div>
    </a>
  );
}
