export default function ContactPage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden text-on-surface font-body selection:bg-primary/30 min-h-screen">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      {/* Header Section */}
      <header className="mb-16 relative z-10 lg:ml-[10%]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">Get In Touch</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-4 leading-none">
          Let&apos;s <span className="text-primary italic">Connect</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
          I am actively open to new opportunities, so please feel free to connect!
        </p>
      </header>

      {/* Contact Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 relative z-10 w-full mx-auto">
        {/* Email Card */}
        <div className="bg-surface-container-low rounded-xl p-6 border-t-4 border-primary/20 hover:border-primary transition-all duration-500 group flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Email</h3>
          <p className="text-on-surface-variant text-sm mb-6">Drop me a line anytime.</p>
          <a href="mailto:anuvanegi@gmail.com" className="mt-auto font-label font-bold text-primary hover:text-primary-container transition-colors text-sm sm:text-base lg:text-sm xl:text-base break-words">
            anuvanegi@gmail.com
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-surface-container-low rounded-xl p-6 border-t-4 border-tertiary/20 hover:border-tertiary transition-all duration-500 group flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">LinkedIn</h3>
          <p className="text-on-surface-variant text-sm mb-6">Connect for professional updates.</p>
          <a href="https://www.linkedin.com/in/anuva-negi" target="_blank" rel="noopener noreferrer" className="mt-auto font-label font-bold text-tertiary hover:text-tertiary-container transition-colors text-sm sm:text-base lg:text-sm xl:text-base break-words">
            linkedin.com/in/anuva-negi
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-surface-container-low rounded-xl p-6 border-t-4 border-primary/20 hover:border-primary transition-all duration-500 group flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Phone</h3>
          <p className="text-on-surface-variant text-sm mb-6">Reach out for quick queries.</p>
          <a href="tel:+14694321606" className="mt-auto font-label font-bold text-primary hover:text-primary-container transition-colors text-sm sm:text-base lg:text-sm xl:text-base break-words">
            +1 (469) 432-1606
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-surface-container-low rounded-xl p-6 border-t-4 border-secondary/20 hover:border-secondary transition-all duration-500 group flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.4s-1.1-.35-3.5 1.27a12.8 12.8 0 0 0-7 0C4.3 1.95 3.2 2.3 3.2 2.3a4.8 4.8 0 0 0-.2 3.4 5.2 5.2 0 0 0-1.4 3.5c0 5.2 3 6.4 6 6.76-.7.63-1 1.54-1 2.94v4" />
              <path d="M9 20.1c-3.6 1.1-4.9-1.5-6-2.1" />
            </svg>
          </div>
          <h3 className="text-xl font-headline font-bold text-on-surface mb-2">GitHub</h3>
          <p className="text-on-surface-variant text-sm mb-6">Check out my open source codebase.</p>
          <a href="https://github.com/silverfrost702" target="_blank" rel="noopener noreferrer" className="mt-auto font-label font-bold text-secondary hover:text-secondary-container transition-colors text-sm sm:text-base lg:text-sm xl:text-base break-words">
            github.com/silverfrost702
          </a>
        </div>
      </div>
    </main>
  );
}

