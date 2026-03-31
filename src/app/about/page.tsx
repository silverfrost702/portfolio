import Image from "next/image";
import profilePic from "@/../public/Me.png";

/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 data-grid-bg flex-grow">
      <div className="max-w-7xl mx-auto px-8">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-stretch">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
              <span className="text-primary font-label text-xs tracking-widest uppercase font-bold">
                DATA SCIENTIST & ANALYST
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-tight mb-4">
              Anuva <span className="text-primary">Negi</span>
            </h1>
            <p className="text-xl font-headline italic text-on-surface w-full mb-8 border-l-4 border-tertiary pl-4">
              "Data is the absolute power; the ability to shape and wield it is the ability to forge the future."
            </p>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
              <div>
                <strong className="text-on-surface font-headline uppercase tracking-wide text-sm mb-1 block">The Perspective</strong>
                <p>I am a Data Science Graduate Student at the University of Texas at Arlington with a 4.0/4.0 GPA. My expertise lies in the intersection of high-fidelity predictive modeling and industrial-grade data pipelines, with a focus on turning raw, unstructured data into actionable intelligence at scale.</p>
              </div>
              <div>
                <strong className="text-on-surface font-headline uppercase tracking-wide text-sm mb-1 block">Capstone Impact</strong>
                <p>As part of my MS program, I am currently leading a Capstone Project for the Office of Information Technology (OIT). My work involves analyzing high-priority incidents to extract logical insights that help the organization plan more effectively and resolve infrastructure challenges. In this role, I serve as the Executive Summary & Volume Lead, bridging the gap between deep technical analysis and strategic executive reporting.</p>
              </div>
              <div>
                <strong className="text-on-surface font-headline uppercase tracking-wide text-sm mb-1 block">Beyond The Data</strong>
                <p>I believe the best technical solutions come from a clear mind. On challenging days, I find my momentum by taking small breaks—a quiet cup of coffee or a short walk. Stepping away from the complexity for a moment allows me to return with the focus needed to handle high-pressure situations.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative h-full">
            <div className="sticky top-32 w-full max-w-md mx-auto lg:mr-0 lg:ml-auto aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/10 shadow-2xl">
              <Image
                alt="Anuva Negi Profile"
                className="w-full h-full object-cover transition-all duration-700"
                src={profilePic}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">
              Milestones & Expertise
            </h2>
            <div className="w-16 h-1 bg-primary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 21h18"></path>
                    <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l9-4 9 4"></path>
                    <line x1="6" y1="21" x2="6" y2="12"></line>
                    <line x1="10" y1="21" x2="10" y2="12"></line>
                    <line x1="14" y1="21" x2="14" y2="12"></line>
                    <line x1="18" y1="21" x2="18" y2="12"></line>
                  </svg>
                  <h3 className="text-2xl font-headline font-bold">
                    M.S. in Data Science
                  </h3>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mb-8 pb-8 border-b border-outline-variant/20">
                  <div>
                    <p className="text-xl text-on-surface font-semibold">
                      University of Texas at Arlington
                    </p>
                    <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">
                      Expected 2026
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-surface-container-highest px-4 py-2 rounded-full text-tertiary font-label text-xs font-bold tracking-widest">
                      GPA: 4.0/4.0
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-primary font-label text-xs font-black uppercase tracking-widest mb-4">
                      Domain Expertise
                    </h4>
                    <ul className="space-y-3 text-on-surface-variant text-sm font-body">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Statistical Analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Business Intelligence
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Data Storytelling
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary font-label text-xs font-black uppercase tracking-widest mb-4">
                      Key Milestones
                    </h4>
                    <ul className="space-y-4 text-on-surface-variant text-sm font-body">
                      <li className="flex flex-col gap-1">
                        <span className="text-on-surface font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                          Data Quest Champion
                        </span>
                        <span className="pl-3.5 leading-relaxed">Led a team to 1st Place in the university-wide data science competition organized by the DATA organization at UTA.</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <span className="text-on-surface font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                          Advanced Specialization
                        </span>
                        <span className="pl-3.5 leading-relaxed">Deep expertise in Distributed Systems, Statistical Learning, and NLP Pipelines.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <span className="material-symbols-outlined text-[200px]">hub</span>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between border-t-4 border-tertiary">
              <div>
                <span className="material-symbols-outlined text-tertiary mb-6">
                  database
                </span>
                <h3 className="text-xl font-headline font-bold mb-4">
                  Data Engineering & Pipelines
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
                  Engineering highly available ETL architectures using Spark, Airflow, and Kubernetes to handle multi-terabyte datasets without latency degradation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  Distributed Computing
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  ETL Architectures
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  Cloud Infrastructure
                </span>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between border-t-4 border-primary">
              <div>
                <span className="material-symbols-outlined text-primary mb-6">
                  query_stats
                </span>
                <h3 className="text-xl font-headline font-bold mb-4">
                  Predictive Modeling & Forecasting
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
                  Developing bespoke machine learning models with a focus on interpretability and bias-mitigation for enterprise-level forecasting.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-tertiary uppercase">
                  XGBoost
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-tertiary uppercase">
                  Time-Series Forecasting
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-tertiary uppercase">
                  Bias Mitigation
                </span>
              </div>
            </div>

            <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/10 p-10 rounded-xl flex items-center gap-12">
              <div className="hidden sm:block">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center p-4">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    terminal
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold mb-2 uppercase tracking-wide">
                  Technical Philosophy
                </h3>
                <p className="text-on-surface-variant text-sm italic font-body max-w-xl">
                  &quot;The value of data is not in its volume, but in the precision of the pipeline that delivers it and the integrity of the model that interprets it.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
