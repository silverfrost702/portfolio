"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "font-label text-[#a8e8ff] border-b-2 border-[#a8e8ff] pb-1 cursor-pointer w-fit";
    }
    return "font-label text-slate-400 hover:text-slate-200 transition-colors w-fit block";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#10141a]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-headline font-bold tracking-tighter text-[#a8e8ff] uppercase z-20">
          ANUVA NEGI
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/about" className={getLinkClass("/about")}>About</Link>
          <Link href="/projects" className={getLinkClass("/projects")}>Projects</Link>
          <Link href="/skills" className={getLinkClass("/skills")}>Skills</Link>
          <Link href="/contact" className="bg-primary text-on-primary px-5 py-2 rounded-xl font-label font-bold hover:bg-primary-container transition-all duration-300 scale-95 active:scale-90 inline-block text-center">
            Contact
          </Link>
        </div>
        
        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary z-20 cursor-pointer">
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#10141a] z-10 flex flex-col items-center justify-center gap-8 pt-16">
          <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass("/")}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={getLinkClass("/about")}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className={getLinkClass("/projects")}>Projects</Link>
          <Link href="/skills" onClick={() => setIsOpen(false)} className={getLinkClass("/skills")}>Skills</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label font-bold text-lg hover:bg-primary-container transition-all duration-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
