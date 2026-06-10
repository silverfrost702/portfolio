/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden text-on-surface font-body selection:bg-primary/30">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

        {/* ── ChurnSight ── Background image hero, content overlaid left */}
        <div className="md:col-span-12 group">
          <div className="relative rounded-2xl overflow-hidden min-h-[420px] border border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl">
            <img
              src="/churnsight_abstract.png"
              alt="Abstract digital visualization of customer network connections"
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 transform"
            />
            {/* Left-to-right gradient so content reads cleanly */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/85 to-surface-container/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container/50 via-transparent to-transparent" />
            <div className="relative z-10 p-10 lg:p-14 max-w-2xl">
              <div className="inline-block px-3 py-1 rounded bg-primary/15 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-5 border border-primary/20">
                Customer Churn Prediction &amp; Retention Analytics
              </div>
              <h3 className="text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-5 leading-tight">ChurnSight</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-7 text-[15px]">
                A production-grade ML system that identifies telecom customers at risk of churning before they leave  and explains why. Built on 7,043 records with SHAP explainability and business-cost threshold optimization. Projected to recover $740K+ annually on a 70K-customer base.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Python", "XGBoost", "SHAP", "Streamlit", "scikit-learn", "Plotly", "imbalanced-learn"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-[10px] font-label font-bold text-primary uppercase border border-primary/25">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href="https://github.com/silverfrost702/churn-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/40 text-primary font-label font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-all duration-300"
                >
                  View Repo
                </a>
                <a
                  href="https://mychurnsight.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/20 border border-primary/40 text-primary font-label font-bold text-xs uppercase tracking-widest hover:bg-primary/30 transition-all duration-300"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── SmogCast ── Image fills card, content blended at bottom */}
        <div className="md:col-span-8 group">
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13wh0dFWeNzmq0NIIoJDxs1FVOqZnNsrIl3DcZOXVAn51svkXAebvN3d4GN6N7aw8MTSx1XbB3VuhJAyXoMsZEPYkzvvQU-mkp2yZs1WttIBRqQZZNUii_cn5PZgLjGWrB8eMjKO_cLyFlfEzIhaM8KWkiTg2Rx61y7rIHXZi4in8qjreWYwC-NlmfzwJmjaGEWecQWzvVioekMP8yrIfyDzSvkQGikQ05pkyEAcSvcQqzQRygPX7y0p9XykGJkbM0fTlqWxRr5X1"
              alt="abstract digital visualization of air particles flowing like neon smoke"
              className="absolute inset-0 w-full h-full object-cover opacity-55 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-[#0c1018]/65 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-label font-semibold text-primary uppercase border border-primary/20">Python</span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-label font-semibold text-primary uppercase border border-primary/20">Scikit-Learn</span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-label font-semibold text-primary uppercase border border-primary/20">Bi-LSTM</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-headline font-bold text-on-surface mb-2">SmogCast: Air Quality Classification &amp; Forecasting</h3>
              <p className="text-on-surface-variant mb-5 font-body leading-relaxed text-sm max-w-2xl">
                A dual-approach system designed to classify current air quality and predict future smog concentrations using time-series analysis.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a className="inline-flex items-center text-primary font-label font-bold tracking-widest uppercase text-xs hover:opacity-70 transition-opacity" href="https://github.com/silverfrost702/SmogCast-Predicting-and-Forecasting-Air-Quality-in-India" target="_blank" rel="noopener noreferrer">Link to Repo</a>
                <a className="inline-flex items-center text-primary font-label font-bold tracking-widest uppercase text-xs hover:opacity-70 transition-opacity" href="https://smogcast.streamlit.app/" target="_blank" rel="noopener noreferrer">View Live</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Predictive Analytics ── 65% image / 35% content with gradient seam */}
        <div className="md:col-span-4 group">
          <div className="rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-lg bg-surface-container-highest">
            <div className="relative" style={{flex: '0 0 65%', minHeight: 0}}>
              <img
                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 transform"
                alt="An abstract visualization of a time-series line graph with glowing neon cyan and teal peaks"
                src="/oit_sentinel_abstract.png"
              />
              {/* Gradient bleeds into the content section below */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent" />
            </div>
            <div className="p-5 flex flex-col justify-between" style={{flex: '0 0 35%', minHeight: 0}}>
              <div>
                <h3 className="text-sm font-headline font-bold text-on-surface mb-1 leading-snug">Predictive Analytics for Academic Incident Management</h3>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed line-clamp-2">
                  Transforming raw OIT service logs into proactive business intelligence  revealing cyclical infrastructure strain.
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-[8px] font-label font-bold text-primary uppercase border border-outline-variant/20">Python</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-[8px] font-label font-bold text-primary uppercase border border-outline-variant/20">Holt-Winters</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/silverfrost702/Year-over-Year-Analysis-of-High-Priority-Service-Incidents/tree/main" target="_blank" rel="noopener noreferrer" className="text-primary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity whitespace-nowrap">Repo</a>
                  <a href="https://yoy-p1p2-incidents.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity whitespace-nowrap">Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Pokémon Data Showdown ── Image fills card, content at bottom */}
        <div className="md:col-span-4 group">
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] border border-white/5 hover:border-tertiary/30 transition-all duration-500 shadow-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 transform"
              alt="Pokemon Data Showdown application showing scatter plots and data analysis"
              src="https://raw.githubusercontent.com/silverfrost702/data_showdown/main/plots/pokemon_main_img.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-[#0c1018]/55 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Pokémon Data Showdown</h3>
              <p className="text-xs text-on-surface-variant font-body mb-4 leading-relaxed">
                Unsupervised ML to explore stat-based roles and build optimized, budget-constrained teams.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[8px] font-label font-bold text-tertiary uppercase border border-tertiary/20">Streamlit</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[8px] font-label font-bold text-tertiary uppercase border border-tertiary/20">Sklearn</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/silverfrost702/data_showdown" target="_blank" rel="noopener noreferrer" className="text-tertiary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity">Repo</a>
                  <a href="https://my-pokemon-team.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-tertiary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity">Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── HackUTA 7 ── Terminal style with glow & subtle grid texture */}
        <div className="md:col-span-4 group">
          <div className="relative bg-surface-container-high rounded-2xl p-8 flex flex-col h-full min-h-[320px] border border-tertiary/10 hover:border-tertiary/40 transition-all duration-500 shadow-lg overflow-hidden">
            {/* Subtle dot-grid texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
            {/* Corner glow */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <div className="text-tertiary text-4xl mb-5 font-black font-mono tracking-tight">{">_"}</div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">HackUTA 7</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                  CivicScribe  a universal AI-powered web app that helps users fill out complex PDF forms through conversational chat. Extensible via &quot;Form Packs&quot; without code changes.
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[9px] font-label font-bold text-tertiary uppercase border border-tertiary/15">Flask</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[9px] font-label font-bold text-tertiary uppercase border border-tertiary/15">OpenAI API</span>
                </div>
                <a className="text-tertiary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity whitespace-nowrap" href="https://github.com/silverfrost702/HACKUTA-7" target="_blank" rel="noopener noreferrer">Access Source</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── SpaceX ── Image fills card, content at bottom */}
        <div className="md:col-span-4 group">
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-55 grayscale group-hover:grayscale-0 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 transform"
              alt="dramatic upward shot of a rocket engine ignition against a dark sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJnctTHB3FmeOgeg2svgn13cP56jFfpgPzCKj9ROKciq84H76GjovTo06TNFVPxpKSiSfZP53E-BnlbzGUSD_QGJ2wLSQsno2F7fozGC4TJF6Rnf-hjr8q4ArXafY9uyQnmBaLm4Ae9gGFV--HFrQc_SP7Lw9rwGWNpTu9D65gEMNhnc5huFxvtsbpRD6FhzD2hgbPTHhxG3BAGu9HNQXJ4Fo7VjRKepwX644bSqF5cvDg9DWKD1_wyoqd34ge8HW0bB36LcIcRuc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-[#0c1018]/55 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl font-headline font-bold text-on-surface mb-1">SpaceX Launch Success Prediction</h3>
              <p className="text-xs text-on-surface-variant font-body mb-4 leading-relaxed">
                Predicting launch success using mission parameters, payloads, and rocket configs with ML.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-container border border-white/10 flex items-center justify-center text-[8px] font-black text-on-primary-container">PY</div>
                  <div className="w-6 h-6 rounded-full bg-secondary-container border border-white/10 flex items-center justify-center text-[8px] font-black text-on-secondary-container">SQL</div>
                </div>
                <a href="https://github.com/silverfrost702/Projects/tree/main/SpaceX_Launch_Success_Prediction" target="_blank" rel="noopener noreferrer" className="text-primary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity">Visit Repo</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Spotify (col-8, 2/3) ── Dark card, image blends in from right */}
        <div className="md:col-span-8 group">
          <div className="relative rounded-2xl overflow-hidden bg-[#1c222c] border border-white/5 group-hover:border-primary/20 transition-all duration-500 h-full shadow-xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            {/* Image bleeds from right, gradient fades it into the dark bg */}
            <div className="absolute inset-y-0 right-0 w-3/5 z-0">
              <img
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                alt="Spotify music analysis dashboard with radar charts"
                src="/dashboard_img.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c222c] via-[#1c222c]/40 to-transparent" />
            </div>
            {/* Content on left */}
            <div className="relative z-10 p-10 max-w-md">
              <div className="inline-block px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-black uppercase tracking-[0.2em] mb-5 border border-tertiary/20">User Experience / Audio Analytics</div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Spotify Music Analysis Dashboard</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6 text-sm">
                An interactive Power BI dashboard visualizing global music streaming trends, track popularity, and artist performance metrics.
              </p>
              <div className="flex flex-wrap gap-4 mb-7">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-xs font-label text-on-surface">Power BI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-xs font-label text-on-surface">Data Visualization</span>
                </div>
              </div>
              <a href="https://github.com/silverfrost702/Projects/tree/main/Spotify%20Music%20Analysis" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-label font-bold text-xs transition-all items-center gap-2">
                VIEW ON GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* ── Tech Layoff (col-4, 1/3) ── Image fills card, content at bottom */}
        <div className="md:col-span-4 group">
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-55 grayscale group-hover:grayscale-0 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 transform"
              alt="complex dashboard with colorful charts and heatmaps"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYir-oM99mLuUhpGN-LP1dpC8PeqBW4MEqP3JoKOZqZV1iqF3-Iuz8lLT-nSEMB4H4fhc5MKeKNukiwCefHjWVZCOJfGyAsWgEEV2Z6bsHZoSzXHEFSnVSYDSdSU9cT0fl40OGCEL6Ysgsmghy5EJ3Xo7sZIL6nEQ8r90a1xhxtKNCXGE-cS67R6nGTDoZu46VlLle-DLYZ90BBLDp0PQ_KECe7RrCPYupAJvdS6L6uSKqoelKV5l-syJCu965eMIpf-MdLbJjMhHY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-[#0c1018]/55 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Tech Layoff Trends Analysis</h3>
              <p className="text-xs text-on-surface-variant font-body mb-4 leading-relaxed">
                Exploring global tech layoff trends 2020–2025 through visualization and data-driven insights.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[8px] font-label font-bold text-primary uppercase border border-primary/20">Tableau</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[8px] font-label font-bold text-primary uppercase border border-primary/20">Pandas</span>
                </div>
                <a href="https://github.com/silverfrost702/Projects/tree/main/tech_layoff_trends" target="_blank" rel="noopener noreferrer" className="text-primary font-label text-xs tracking-widest font-black uppercase hover:opacity-70 transition-opacity whitespace-nowrap">Visit Repo</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
