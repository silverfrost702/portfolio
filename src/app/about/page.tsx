import Image from "next/image";
import profilePic from "@/../public/Me.png";

/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 data-grid-bg flex-grow">
      <div className="max-w-7xl mx-auto px-8">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
              <span className="text-primary font-label text-xs tracking-widest uppercase font-bold">
                Researcher & Architect
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-tight mb-8">
              Anuva <span className="text-primary">Negi</span>
            </h1>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>
                I am a Data Science Graduate Student at the{" "}
                <span className="text-on-surface font-semibold">
                  University of Texas at Arlington
                </span>
                , specializing in the intersection of high-fidelity predictive modeling and industrial-grade data pipelines.
              </p>
              <p>
                My approach to data science is rooted in the belief that algorithms should be as robust as they are insightful. I focus on architecting end-to-end systems that transform raw, unstructured data streams into actionable intelligence at scale.
              </p>
              <p>
                Whether I am optimizing deep learning weights or streamlining Spark-based ETL processes, my goal is to build an{" "}
                <span className="text-tertiary">Algorithmic Archive</span>—a legacy of data-driven solutions that solve real-world complexities.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/10 shadow-2xl">
              <Image
                alt="Anuva Negi Profile"
                className="w-full h-full object-cover transition-all duration-700"
                src={profilePic}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 blur-[100px] rounded-full"></div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">
              Academic Pedigree
            </h2>
            <div className="w-16 h-1 bg-primary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-primary scale-150">
                    school
                  </span>
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
                      Expected 2025
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
                      Core Focus
                    </h4>
                    <ul className="space-y-3 text-on-surface-variant text-sm font-body">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Predictive Modeling
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Neural Architecture Search
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Distributed Systems
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary font-label text-xs font-black uppercase tracking-widest mb-4">
                      Key Coursework
                    </h4>
                    <ul className="space-y-3 text-on-surface-variant text-sm font-body">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Advanced Stats Learning
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        Cloud Infrastructure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>{" "}
                        NLP Pipelines
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
                  Data Pipelines
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
                  Engineering highly available ETL architectures using Spark, Airflow, and Kubernetes to handle multi-terabyte datasets without latency degradation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  Apache Spark
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  Kafka
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-primary uppercase">
                  AWS Glue
                </span>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between border-t-4 border-primary">
              <div>
                <span className="material-symbols-outlined text-primary mb-6">
                  query_stats
                </span>
                <h3 className="text-xl font-headline font-bold mb-4">
                  Predictive Analytics
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
                  PyTorch
                </span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-tighter font-label text-tertiary uppercase">
                  SciKit-Learn
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
