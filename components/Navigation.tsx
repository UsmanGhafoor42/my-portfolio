"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navigation({
  activeSection,
  scrollToSection,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#072800] shadow-md transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container-layout max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#home"
            className="text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["about", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-lg font-semibold capitalize transition-colors ${
                  activeSection === item
                    ? " text-amber-600 border-white pb-1"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <MobileMenu scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#072800] border-b-2 border-white/20 shadow-xl">
          <div className="container-layout">
            <div className="flex flex-col py-4">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsOpen(false);
                  }}
                  className="text-left px-6 py-4 text-white font-semibold hover:bg-white/10 transition-colors capitalize rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
