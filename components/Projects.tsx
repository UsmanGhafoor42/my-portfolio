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

      gsap.set(titleRef.current, { opacity: 0, y: 30 });
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

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
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
      <div className="container-layout max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1a4d2e] mb-20 sm:mb-24 md:mb-28 lg:mb-32 opacity-100"
        >
          Work
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 opacity-100"
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
  return (
    <div className="bg-[#F5F5DC] rounded-2xl px-6 py-8 sm:px-8 sm:py-10 border-2 border-[#1a4d2e]/10 hover:border-[#FF8C42] hover:shadow-xl transition-all duration-300 group flex flex-col">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a4d2e] mb-4 group-hover:text-[#FF8C42] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-[#2d5a3d] mb-6 leading-relaxed grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1.5 text-xs font-medium bg-[#1a4d2e]/10 text-[#1a4d2e] rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FF8C42] font-bold hover:opacity-70 transition-opacity inline-flex items-center gap-2 text-sm sm:text-base mt-auto"
      >
        View Project →
      </a>
    </div>
  );
}
