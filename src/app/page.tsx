/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="data-grid-bg absolute inset-0"></div>
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-tertiary/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex-grow flex items-center px-8 md:px-24 py-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 ml-[10%]">
            <div className="space-y-2">
              <span className="font-headline text-primary tracking-[0.2em] uppercase text-sm font-bold block mb-4">DATA SCIENTIST & ANALYST</span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none text-on-surface">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Anuva Negi</span>
              </h1>
            </div>

            <p className="text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Transforming messy datasets into the <span className="text-tertiary">logic</span> that drives <span className="text-tertiary">business-critical</span> decisions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-3 hover:shadow-[0_0_20px_rgba(168,232,255,0.3)] transition-all duration-300 group">
                View My Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-bright transition-all duration-300">
                Get in Touch
              </Link>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-3 pt-8">
              <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2 border border-outline-variant/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Python
              </div>
              <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2 border border-outline-variant/10">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> R
              </div>
              <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2 border border-outline-variant/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> SQL
              </div>
              <div className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-widest flex items-center gap-2 border border-outline-variant/10">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Snowflake
              </div>
            </div>
          </div>

          {/* Abstract Visual */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="glass-panel p-1 rounded-2xl overflow-hidden relative group">
              <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden rounded-xl flex items-center justify-center relative">
                
                {/* Ambient Glow */}
                <div className="absolute w-full h-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full group-hover:bg-tertiary/30 transition-colors duration-1000"></div>

                {/* Animated Rotating Sunburst Chart SVG */}
                <svg className="w-full h-full absolute inset-0 p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Base Core */}
                  <circle cx="200" cy="200" r="30" fill="url(#sunburstGradient)" className="animate-pulse" />

                  {/* Ring 1 - Inner */}
                  <g className="origin-[200px_200px] animate-[spin_40s_linear_infinite]">
                    <circle cx="200" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="40 20 60 10 80 41" className="text-primary/60" />
                  </g>

                  {/* Ring 2 */}
                  <g className="origin-[200px_200px] animate-[spin_50s_linear_infinite_reverse]">
                    <circle cx="200" cy="200" r="58" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="30 10 90 20 50 40 100 49" className="text-tertiary/50" />
                  </g>

                  {/* Ring 3 */}
                  <g className="origin-[200px_200px] animate-[spin_60s_linear_infinite]">
                    <circle cx="200" cy="200" r="76" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="120 30 60 15 140 20 80 62" className="text-primary/40" />
                  </g>

                  {/* Ring 4 */}
                  <g className="origin-[200px_200px] animate-[spin_45s_linear_infinite_reverse]">
                    <circle cx="200" cy="200" r="94" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="80 20 150 30 70 40 210 66" className="text-tertiary/30" />
                  </g>

                  {/* Ring 5 */}
                  <g className="origin-[200px_200px] animate-[spin_70s_linear_infinite]">
                    <circle cx="200" cy="200" r="112" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="200 40 100 30 150 20 180 84" className="text-primary/20" />
                  </g>

                  {/* Ring 6 - Outer Thin Frame */}
                  <g className="origin-[200px_200px] animate-[spin_90s_linear_infinite_reverse]">
                    <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" className="text-tertiary/40" />
                  </g>

                  {/* Subtle Guide Lines */}
                  <g className="origin-[200px_200px] text-primary/10" stroke="currentColor" strokeWidth="1">
                    <line x1="200" y1="20" x2="200" y2="380" />
                    <line x1="20" y1="200" x2="380" y2="200" />
                    <line x1="72" y1="72" x2="328" y2="328" />
                    <line x1="72" y1="328" x2="328" y2="72" />
                  </g>

                  {/* Gradient Definitions */}
                  <defs>
                    <radialGradient id="sunburstGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a8e8ff" />
                      <stop offset="100%" stopColor="#63f6d9" stopOpacity="0.5" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Floating UI Elements above SVG */}
                <div className="absolute top-4 right-4 bg-surface-container-low/60 backdrop-blur-md p-3 rounded-xl border border-primary/50 shadow-[0_0_15px_rgba(168,232,255,0.3)] flex flex-col gap-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 min-w-[120px] z-10">
                  <span className="text-[10px] text-primary uppercase tracking-widest font-bold flex items-center gap-2 drop-shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Curiosity
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-white font-black tracking-wider drop-shadow-lg">MAX THRESHOLD</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m3 16 4-4 4 4 8-8"/><path d="m14 8h5v5"/></svg>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-4 bg-surface-container-low/60 backdrop-blur-md p-3 rounded-xl border border-tertiary/50 shadow-[0_0_15px_rgba(99,246,217,0.3)] flex flex-col gap-1 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 min-w-[120px] z-10">
                  <span className="text-[10px] text-tertiary uppercase tracking-widest font-bold drop-shadow-md">Analytical Rigor</span>
                  <span className="text-base font-headline text-tertiary font-black mt-0.5 brightness-150 drop-shadow-[0_0_10px_rgba(99,246,217,0.6)]">100%</span>
                  
                  {/* Glowing Progress Bar */}
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mt-1">
                    <div className="w-full h-full bg-gradient-to-r from-tertiary to-white shadow-[0_0_8px_rgba(99,246,217,1)] animate-pulse">
                    </div>
                  </div>
                </div>

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section Separation */}
      <div className="h-24 w-full bg-gradient-to-b from-background to-surface-container-low"></div>
    </main>
  );
}
