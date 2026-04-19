export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-[#1c222c] bg-[#10141a] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <span className="font-headline font-black text-[#a8e8ff] text-lg tracking-tighter uppercase">ANUVA NEGI</span>
          <p className="font-body text-xs text-slate-500 mt-2 opacity-80 hover:opacity-100 transition-opacity">
            &copy; {new Date().getFullYear()} Anuva Negi. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="font-body text-sm tracking-wide text-slate-500 hover:text-[#63f6d9] transition-colors" href="https://www.linkedin.com/in/anuva-negi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-body text-sm tracking-wide text-slate-500 hover:text-[#63f6d9] transition-colors" href="https://github.com/silverfrost702" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-body text-sm tracking-wide text-slate-500 hover:text-[#63f6d9] transition-colors" href="mailto:anuvanegi@gmail.com">Email</a>
          <a className="font-body text-sm tracking-wide text-slate-500 hover:text-[#63f6d9] transition-colors" href="/Anuva_Negi_Resume.pdf" download="Anuva_Negi_Resume.pdf">Resume</a>
        </div>
      </div>
    </footer>
  );
}
