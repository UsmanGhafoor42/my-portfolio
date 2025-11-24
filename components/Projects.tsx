"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Licorice 4 Good",
    description:
      "A fundraising platform enabling organizations to sell licorice ropes and keep 50% of sales. Features include online sign-up, sample box distribution, media kits, and automated commission tracking.",
    tech: ["Next.js", "React", "TypeScript", "E-commerce"],
    link: "https://licorice4good.com/",
  },
  {
    title: "Southern Sweet & Sour",
    description:
      "E-commerce platform for a disabled veteran-owned licorice rope business. Includes online ordering, wholesale portal, fundraising programs, and supports Warrior's Next Adventure charity.",
    tech: ["Next.js", "React", "E-commerce", "Payment Integration"],
    link: "https://southernsweetandsour.com/",
  },
  {
    title: "Hot Market DTF",
    description:
      "Custom DTF (Direct to Film) transfer printing service with UV sticker capabilities. Features online ordering, gang sheet creation, same-day turnaround, and order history management.",
    tech: ["Next.js", "React", "E-commerce", "File Upload"],
    link: "https://hotmarketdtf.com/",
  },
  {
    title: "Mega Jump Park Tickets",
    description:
      "European ticket booking system for trampoline park reservations. Features real-time availability, online booking, payment processing, and ticket management system.",
    tech: ["Next.js", "React", "Booking System", "Payment Gateway"],
    link: "https://megajumpparktickets.eu/",
  },
  {
    title: "Licorice Affiliate Program",
    description:
      "Affiliate marketing platform for licorice fundraising. Enables partners to earn commissions, track referrals, manage campaigns, and access marketing materials.",
    tech: ["Next.js", "React", "Affiliate System", "Analytics"],
    link: "https://licoriceaffiliate.licorice4good.com/",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(cardsRef.current!.children);

      // Set initial positions BEFORE animation to prevent jumps
      gsap.set(titleRef.current, { y: 60, opacity: 0 });
      cards.forEach((card) => {
        gsap.set(card, { y: 80, opacity: 0, scale: 0.95 });
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

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-white">
      <div className="container-layout max-w-7xl mx-auto flex flex-col gap-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black opacity-100"
        >
          Projects
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 opacity-100"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
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
    <div
      ref={cardRef}
      className="bg-[#FAFAFA] rounded-3xl px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-16 xl:px-16 xl:py-20 border-2 border-[#072800]/10 hover:border-[#072800]/30 hover:shadow-2xl transition-all duration-300 group flex flex-col"
    >
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-5 lg:mb-6 group-hover:text-[#072800] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-[#4A4A4A] mb-6 sm:mb-8 leading-relaxed grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 text-xs sm:text-sm font-semibold bg-[#072800]/10 text-[#072800] rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#072800] font-bold hover:opacity-70 transition-opacity inline-flex items-center gap-2 text-base sm:text-lg lg:text-xl mt-auto"
      >
        View Project →
      </a>
    </div>
  );
}
