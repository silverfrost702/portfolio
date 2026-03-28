/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden text-on-surface font-body selection:bg-primary/30">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      {/* Hero Section for Projects */}
      <header className="mb-16 relative z-10 lg:ml-[10%]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
          <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">Selected Works</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-4 leading-none">
          Curated <span className="text-primary italic">Deployments</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
          Exploring the intersection of data architecture and predictive modeling. A collection of archival projects focusing on signal processing and algorithmic narratives.
        </p>
      </header>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Project 1: SmogCast */}
        <div className="md:col-span-8 group">
          <div className="bg-surface-container-low rounded-xl overflow-hidden h-full border-b-4 border-primary/20 hover:border-primary transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="abstract digital visualization of air particles flowing like neon smoke with dark background and cyan accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13wh0dFWeNzmq0NIIoJDxs1FVOqZnNsrIl3DcZOXVAn51svkXAebvN3d4GN6N7aw8MTSx1XbB3VuhJAyXoMsZEPYkzvvQU-mkp2yZs1WttIBRqQZZNUii_cn5PZgLjGWrB8eMjKO_cLyFlfEzIhaM8KWkiTg2Rx61y7rIHXZi4in8qjreWYwC-NlmfzwJmjaGEWecQWzvVioekMP8yrIfyDzSvkQGikQ05pkyEAcSvcQqzQRygPX7y0p9XykGJkbM0fTlqWxRr5X1"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-semibold text-primary uppercase">Python</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-semibold text-primary uppercase">Scikit-Learn</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-semibold text-primary uppercase">Prophet</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-3">SmogCast: Air Quality Classification &amp; Forecasting</h3>
              <p className="text-on-surface-variant mb-6 font-body leading-relaxed max-w-2xl">
                A dual-approach system designed to classify current air quality and predict future smog concentrations using time-series analysis. Leveraging atmospheric data to provide actionable environmental insights.
              </p>
              <a className="inline-flex items-center gap-2 text-primary font-label font-bold group/link" href="https://github.com/anuvanegi">
                ARCHIVE REPOSITORY 
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        {/* Project 2: HackUTA */}
        <div className="md:col-span-4 group">
          <div className="bg-surface-container-high rounded-xl p-8 flex flex-col h-full border-b-4 border-tertiary/20 hover:border-tertiary transition-all duration-500">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">HackUTA 7</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                Competitive engineering challenge project. Focused on rapid prototyping of data-driven solutions under high-pressure constraints.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[9px] font-label font-bold text-tertiary uppercase">Flask</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[9px] font-label font-bold text-tertiary uppercase">OpenAI API</span>
              </div>
              <a className="text-tertiary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity" href="#">Access Source</a>
            </div>
          </div>
        </div>
        {/* Project 3: SpaceX */}
        <div className="md:col-span-4 group">
          <div className="bg-surface-container-highest rounded-xl overflow-hidden flex flex-col h-full hover:bg-surface-bright transition-colors duration-300">
            <div className="h-40 bg-surface-container">
              <img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" alt="dramatic upward shot of a rocket engines ignition against a dark sky with technical blueprints overlayed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJnctTHB3FmeOgeg2svgn13cP56jFfpgPzCKj9ROKciq84H76GjovTo06TNFVPxpKSiSfZP53E-BnlbzGUSD_QGJ2wLSQsno2F7fozGC4TJF6Rnf-hjr8q4ArXafY9uyQnmBaLm4Ae9gGFV--HFrQc_SP7Lw9rwGWNpTu9D65gEMNhnc5huFxvtsbpRD6FhzD2hgbPTHhxG3BAGu9HNQXJ4Fo7VjRKepwX644bSqF5cvDg9DWKD1_wyoqd34ge8HW0bB36LcIcRuc"/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2">SpaceX Launch Success Prediction</h3>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Predicting booster landing success using historical telemetry and logistic regression models.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary-container border-2 border-surface-container-highest flex items-center justify-center text-[8px] font-black text-on-primary-container">PY</div>
                  <div className="w-6 h-6 rounded-full bg-secondary-container border-2 border-surface-container-highest flex items-center justify-center text-[8px] font-black text-on-secondary-container">SQL</div>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">north_east</span>
              </div>
            </div>
          </div>
        </div>
        {/* Project 4: Tech Layoff Trends */}
        <div className="md:col-span-8 group">
          <div className="bg-surface-container rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-l-4 border-primary/10 hover:border-primary transition-all duration-500">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-label font-bold text-on-surface-variant opacity-50">TREND_ANALYSIS_04</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Tech Layoff Trends Analysis</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                A deep dive into global tech industry shifts. Analyzing economic variables and company metadata to map the trajectory of industry workforce changes. 
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] font-label font-bold text-primary uppercase">Tableau</span>
                <span className="text-[10px] font-label font-bold text-primary uppercase">Pandas</span>
                <span className="text-[10px] font-label font-bold text-primary uppercase">EDA</span>
              </div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <img className="rounded opacity-80" alt="complex dashboard with various colorful charts and heatmaps against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYir-oM99mLuUhpGN-LP1dpC8PeqBW4MEqP3JoKOZqZV1iqF3-Iuz8lLT-nSEMB4H4fhc5MKeKNukiwCefHjWVZCOJfGyAsWgEEV2Z6bsHZoSzXHEFSnVSYDSdSU9cT0fl40OGCEL6Ysgsmghy5EJ3Xo7sZIL6nEQ8r90a1xhxtKNCXGE-cS67R6nGTDoZu46VlLle-DLYZ90BBLDp0PQ_KECe7RrCPYupAJvdS6L6uSKqoelKV5l-syJCu965eMIpf-MdLbJjMhHY"/>
            </div>
          </div>
        </div>
        {/* Project 5: Spotify Dashboard */}
        <div className="md:col-span-12 group">
          <div className="relative rounded-xl overflow-hidden bg-[#1c222c] border border-outline-variant/10 group-hover:border-primary/30 transition-all duration-500">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 p-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="inline-block px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-black uppercase tracking-[0.2em] mb-4">User Experience / Audio Analytics</div>
                <h3 className="text-4xl font-headline font-bold text-on-surface mb-6">Spotify Music Analysis Dashboard</h3>
                <p className="text-on-surface-variant font-body leading-relaxed mb-8 text-lg">
                  Real-time interaction with personal listening habits. This dashboard processes Spotify API data to visualize audio features like valence, energy, and acousticness across preferred playlists.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-xs font-label text-on-surface">Streamlit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-xs font-label text-on-surface">Spotipy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-xs font-label text-on-surface">Plotly</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-label font-bold text-sm transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-base">code</span>
                  VIEW ON GITHUB
                </button>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <img className="rounded-xl shadow-2xl transform group-hover:rotate-1 group-hover:scale-[1.02] transition-transform duration-700" alt="clean UI interface showing musical audio feature analysis with circular radar charts in vibrant cyan and magenta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn4Q5R_jn57NUVYMsymlPrA3950usKGQCJd8SnMEB40fyeglz1itLOh_LWhva8dHUy1l-rl2AfKfSl1XwzH9bZU0HT7bw30QmsiwYUKWWjntCoUggquMx-CpxWgw17EQrgRLL-ZvLFUO87grTWpyNITE3oVt0f-4wYzISvIjh5VO9iwgzZAtBUhUhhApEp4GOTLE2GEP6hdR00FmZrt6uUmcH9TP5WdZFNqQ-obCilzdZ7aaQtRIqGjEvG6ij9yEd0roghMEn5c7_v"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
