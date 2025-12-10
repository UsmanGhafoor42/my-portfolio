"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t-2 border-[#1a4d2e]/10 bg-[#1a4d2e]">
      <div className="container-layout max-w-7xl mx-auto text-center">
        <p className="text-white text-base font-medium">
          © {new Date().getFullYear()} Euro Developers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
