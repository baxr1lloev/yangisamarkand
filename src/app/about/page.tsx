"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTjU1IwAUHGKUGv4bYgHjLRhbQ7Sxj8c1sB8WZpcPARNdWGNc30A1m3sPcT2nGLaJmkeR0DSaWsl33gzso6nVIRNjiFxLbOUD18dMR2HV56EZ9u3LjpDvg_n_Qfbwtp0gxHw9f65fW95eMPwUsioZhK8lBEmApU9KR2TCgSwj6v_QMyyDLZF2Moc7SPD9VLwj-0fgqieZjHrxms9e7AOCW4lCsSzyI_m0llnZ7PYEkRvfTugOxq701oqa0-Yp3fvTK1k8-CV4wx2A")' }}></div>
        </div>
        <div className="relative z-20 container mx-auto px-6 lg:px-40 w-full">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-12 bg-accent-gold"></div>
              <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
            </div>
            <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Honor the Past.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Build the Future.</span>
            </h1>
            <p className="text-slate-200 text-lg lg:text-xl font-medium max-w-[600px] leading-relaxed">
              The YANGI SAMARQAND Public Fund is dedicated to sustainable development that respects our deep cultural roots while embracing global innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Mission Card */}
            <div className="group relative bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
              <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-[120px]">flag</span>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-primary-300 text-xs font-bold uppercase tracking-wide rounded mb-6">Our Mission</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Empowering Growth through Integrity</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  To foster sustainable development and cultural preservation through transparent public funding and active community engagement. We bridge the gap between resources and results.
                </p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="group relative bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-accent-gold">
              <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-accent-gold/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-[120px]">visibility</span>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wide rounded mb-6">Our Vision</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">A Beacon of Modern Heritage</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  A thriving, modernized region that honors its historic roots while embracing innovation and global standards. We see a Samarkand that leads by example.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white dark:bg-[#152329] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#136986 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-40 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">Our Core Values</h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-slate-500 dark:text-slate-400 text-lg">The fundamental principles that guide every decision, investment, and partnership at the Yangi Samarqand Fund.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'verified_user', title: 'Radical Transparency', desc: 'Open financial reporting and clear decision-making processes. We believe trust is earned through visibility.' },
              { icon: 'diversity_3', title: 'Social Responsibility', desc: 'Unwavering commitment to community welfare. Every project must measurably improve the lives of our citizens.' },
              { icon: 'lightbulb', title: 'Innovation Support', desc: 'Investing in modern solutions for urban challenges. We seek smart, tech-driven answers to old problems.' },
              { icon: 'museum', title: 'Heritage Preservation', desc: 'Protecting our cultural legacy. Modernization must never come at the cost of our historical identity.' },
              { icon: 'handshake', title: 'Collaborative Spirit', desc: 'We work alongside government, private sector, and citizens. Unity is our most powerful resource.' },
              { icon: 'eco', title: 'Sustainability', desc: 'Building for the long term. Our environmental impact is considered in every strategic decision.' }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col p-8 bg-background-light dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="size-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary dark:text-primary-300">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 px-6 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="absolute -top-6 -left-6 size-24 border-t-4 border-l-4 border-accent-gold/30 rounded-tl-3xl hidden lg:block"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
              <img alt="Uzbek mosaic patterns" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZKKL31FxYjEclh9HMtG9ET_l25C7SQ7SOAVFPGEgZPLPosZzkoCSZ6sZyIofMkQyp4K0hM5EWAOWnSa24c1jEafpZmqRND4IiBxGaxVi9-yI-DbzxR4orM8ByTI3mAp3CxWfIydD46Q2wjBHNxVtf88een8F8A5EFoTF5bjfpKpdjXh1ZcLjwa3SsGBSmQjDbxVKYtGmQYJosX7l2qkPV2fuh1HhgNO5VvNqaGOiNxteb-3IRNAARM3amw-igNL3OZsgyyTuUVro" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background-dark/90 to-transparent z-20">
                <p className="text-white text-sm font-bold uppercase tracking-widest">Focus Areas 2024-2030</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 w-full">
            <div>
              <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold mb-4">Strategic Goals</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Our roadmap is clear. We are channeling resources into three critical pillars that will define the next decade of Samarkand's growth.</p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { icon: 'apartment', title: 'Urban Infrastructure', desc: 'Modernizing transport, water systems, and public spaces to meet international smart-city standards.' },
                { icon: 'school', title: 'Education & Youth', desc: 'Building innovation hubs and scholarship programs to empower the next generation of leaders.' },
                { icon: 'flight_takeoff', title: 'Sustainable Tourism', desc: 'Enhancing visitor experiences while rigorously protecting the integrity of our UNESCO World Heritage sites.' },
              ].map((goal, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 min-w-8 flex justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">{goal.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white text-xl font-bold">{goal.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
