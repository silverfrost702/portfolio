/* eslint-disable @next/next/no-img-element */
export default function SkillsPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden flex-grow">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-10"></div>
      
      {/* Hero Section */}
      <header className="mb-20 ml-[10%] max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-tertiary"></span>
          <span className="font-label text-sm uppercase tracking-[0.2em] text-tertiary">Technical Competency</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-none">
          SKILLS &amp; <br/> <span className="text-primary">EXPERTISE.</span>
        </h1>
        <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
          A multi-dimensional approach to data science, merging statistical rigor with high-performance computational engineering to unlock hidden patterns in complex datasets.
        </p>
      </header>
      
      {/* Bento Grid Skills Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Programming (Bento Large) */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl border-b border-r border-outline-variant/10 relative overflow-hidden group hover:bg-surface-bright transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">Programming</h3>
              <p className="text-on-surface-variant text-sm">Foundational logic and high-level scripting languages.</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:text-primary transition-colors">code</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-3 group/item">
              <span className="text-tertiary font-headline font-bold text-lg">Python</span>
              <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[95%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-3">
              <span className="text-tertiary font-headline font-bold text-lg">R</span>
              <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[80%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-3">
              <span className="text-tertiary font-headline font-bold text-lg">SQL</span>
              <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[90%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-xl flex flex-col gap-3">
              <span className="text-tertiary font-headline font-bold text-lg">Perl</span>
              <div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[65%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-[10px] font-label uppercase tracking-widest text-outline">Optimized for: Large-scale data pipelines &amp; automation</div>
        </div>
        
        {/* Databases & Cloud (Bento Medium) */}
        <div className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl group hover:bg-surface-bright transition-all duration-500">
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <span className="material-symbols-outlined text-primary mb-4">cloud_done</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Databases &amp; Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label text-on-surface-variant border border-outline-variant/20">Snowflake</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label text-on-surface-variant border border-outline-variant/20">AWS</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label text-on-surface-variant border border-outline-variant/20">MongoDB</span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label text-on-surface-variant border border-outline-variant/20">BigQuery</span>
            </div>
          </div>
        </div>
        
        {/* Machine Learning & Analytics (Bento Large/Center) */}
        <div className="md:col-span-12 lg:col-span-7 bg-surface-container-low p-8 rounded-xl relative overflow-hidden group hover:bg-surface-bright transition-all duration-500">
          <div className="absolute right-0 top-0 w-32 h-full opacity-5">
            <img className="h-full w-full object-cover" alt="abstract data visualization with neural network connections and glowing nodes on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD854liVM0d7B3fztueeFyO7J1RXQagu9yqO6PpSwHnBqM2DTkaj-lzxBcxIbzD92TMgO9jODr-HOc1OaTGHRJB-2pBlacNHRMRVwe1CEWsexIyUHXHzcJYlpTZtn6mOu4TQYcJMRiVoIxvVjLQGu_odcwlNnQ9_wLaLz_P91p9sp2iNAk5Ik7jZ8eXABLBbYxAKs2TJartmu6wMsW8qXbzOTdmM1Xfmb33rnoduy9boP5arYJT_G5dHUpI84xhLi8D0T62C-pj8Q7u"/>
          </div>
          <h3 className="text-3xl font-headline font-bold text-tertiary mb-8">Machine Learning &amp; Analytics</h3>
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-12">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center shrink-0 relative">
                <span className="material-symbols-outlined text-tertiary absolute left-1/2 -translate-x-1/2">Perception</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Deep Learning</h4>
                <p className="text-on-surface-variant text-sm">Specializing in CNNs and Transformer architectures for unstructured data analysis.</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center shrink-0 relative">
                <span className="material-symbols-outlined text-tertiary absolute left-1/2 -translate-x-1/2">Inference</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Predictive Modeling</h4>
                <p className="text-on-surface-variant text-sm">Forecasting outcomes using ensemble methods and Bayesian statistics.</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center shrink-0 relative">
                <span className="material-symbols-outlined text-tertiary absolute left-1/2 -translate-x-1/2">Correlation</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Regression Analysis</h4>
                <p className="text-on-surface-variant text-sm">Multivariate modeling to identify key drivers in behavioral datasets.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Libraries & Frameworks (Bento Medium/Vertical) */}
        <div className="md:col-span-12 lg:col-span-5 bg-surface-container p-8 rounded-xl border-l-4 border-primary">
          <h3 className="text-2xl font-headline font-bold text-primary mb-6">Libraries &amp; Frameworks</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="group/badge relative p-4 rounded-xl bg-surface-container-high hover:bg-primary-container/10 transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-on-surface font-bold">Pandas</span>
                <span className="text-[10px] text-primary uppercase font-label">Data Manipulation</span>
              </div>
            </div>
            <div className="group/badge relative p-4 rounded-xl bg-surface-container-high hover:bg-primary-container/10 transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-on-surface font-bold">NumPy</span>
                <span className="text-[10px] text-primary uppercase font-label">Scientific Computing</span>
              </div>
            </div>
            <div className="group/badge relative p-4 rounded-xl bg-surface-container-high hover:bg-primary-container/10 transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-on-surface font-bold">TensorFlow</span>
                <span className="text-[10px] text-primary uppercase font-label">Model Training</span>
              </div>
            </div>
            <div className="group/badge relative p-4 rounded-xl bg-surface-container-high hover:bg-primary-container/10 transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-on-surface font-bold">PyTorch</span>
                <span className="text-[10px] text-primary uppercase font-label">Neural Networks</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 bg-surface-container-highest p-4 rounded-xl">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-xs text-on-surface-variant">Active contributor to open-source data modules.</span>
          </div>
        </div>
        
        {/* Data Visualization (Full Width Highlight) */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center border border-outline-variant/5">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Data Visualization</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Translating complex results into actionable business intelligence through interactive dashboards and cinematic data storytelling.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-headline font-bold">Power BI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-headline font-bold">Tableau</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-video bg-surface-container-highest flex items-center justify-center relative">
            <img className="w-full h-full object-cover opacity-60" alt="clean minimal line chart visualization on a glass dark interface with soft teal highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLjzuGEbGzQMkxOTSwDD9qC4VM_AiSL9ZzGtpRYpf9l0GXysjncN3n6C0_ktiEDm6ZwQWZ6UTkz-OZMxF3mccYMTYXb0esdBYju1ym-eDZRr_FsKcU9Uk6T8MVpP9KqACMSjvvmc5C__ISz_iuOift_gSNumOt0OKpkU-E3MITp0Kf_npWwU7VIbcrIJ5Em03B6kIQzjLSMpFAZoAAjBMULLCSAbQDnQ8oNk_ArPHeFQdq96LsdbY_mxYT17pWWZZ3Jv_hJtor-8IC"/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Live Insights Dashboard Concept</span>
          </div>
        </div>
        
        {/* Workflow Tools (Bento Small) */}
        <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between border-t-2 border-outline-variant group hover:border-primary transition-colors">
          <h3 className="text-xl font-headline font-bold text-on-surface">Workflow Tools</h3>
          <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between group/row">
              <span className="text-on-surface-variant font-label text-sm group-hover/row:text-primary transition-colors">Git / GitHub</span>
              <span className="material-symbols-outlined text-outline group-hover/row:text-primary">hub</span>
            </div>
            <div className="flex items-center justify-between group/row">
              <span className="text-on-surface-variant font-label text-sm group-hover/row:text-primary transition-colors">Jira / Agile</span>
              <span className="material-symbols-outlined text-outline group-hover/row:text-primary">view_kanban</span>
            </div>
            <div className="flex items-center justify-between group/row">
              <span className="text-on-surface-variant font-label text-sm group-hover/row:text-primary transition-colors">VS Code</span>
              <span className="material-symbols-outlined text-outline group-hover/row:text-primary">code</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
