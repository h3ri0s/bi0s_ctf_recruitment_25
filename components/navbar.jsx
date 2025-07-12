"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between relative z-50">
      {/* Left side - Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/flag.png" alt="Flag" width={28} height={28} />
        <span className="font-bold text-lg">bi0s</span>
      </Link>


      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
        <Link href="https://wiki.bi0s.in/" className="hover:text-blue-400 transition">Resources</Link>
        <Link href="#about" className="hover:text-blue-400 transition">About</Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu (aligned to right) */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-black flex flex-col items-end py-4 gap-4 md:hidden px-6">
          <Link
            href="https://wiki.bi0s.in/ "
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            Resources
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition"
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}