"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t-2 border-[#072800]/10 bg-[#FAFAFA]">
      <div className="container-layout max-w-7xl mx-auto text-center">
        <p className="text-[#4A4A4A] text-base font-medium">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
