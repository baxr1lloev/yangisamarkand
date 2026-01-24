export default function CouncilPage() {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
          <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">Council Members</h1>
          <p className="max-w-2xl mx-auto text-xl text-text-muted dark:text-gray-400 leading-relaxed">
            Distinguished individuals guiding the strategic direction and ensuring the integrity of the Yangi Samarqand Public Fund.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Council Member 1 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
              <img src="/images/council/erkinjon-turdimov.jpg" alt="Erkinjon Turdimov" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Chairman</p>
                 <h3 className="text-2xl font-bold">Erkinjon Turdimov</h3>
               </div>
            </div>
            <div className="p-6">
              <p className="text-text-muted dark:text-gray-400 text-sm mb-4 h-20 line-clamp-4">
                Governor of the Samarkand Region. Leading the initiative to transform Samarkand into a modern economic hub while preserving its historical legacy.
              </p>
              <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">link</span></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></a>
              </div>
            </div>
          </div>

          {/* Council Member 2 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
              <img src="/images/council/aziza-umarova.jpg" alt="Dr. Aziza Umarova" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Board Member</p>
                 <h3 className="text-2xl font-bold">Dr. Aziza Umarova</h3>
               </div>
            </div>
            <div className="p-6">
              <p className="text-text-muted dark:text-gray-400 text-sm mb-4 h-20 line-clamp-4">
                Expert in public administration and governance. Bringing decades of international experience in sustainable development reforms.
              </p>
              <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">link</span></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></a>
              </div>
            </div>
          </div>

          {/* Council Member 3 */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
               <img src="/images/council/jamshid-khodjaev.jpg" alt="Jamshid Khodjaev" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Secretary</p>
                 <h3 className="text-2xl font-bold">Jamshid Khodjaev</h3>
               </div>
            </div>
            <div className="p-6">
              <p className="text-text-muted dark:text-gray-400 text-sm mb-4 h-20 line-clamp-4">
                Economist and urban planner. Focused on ensuring fiscal responsibility and transparent allocation of fund resources.
              </p>
              <div className="flex gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">link</span></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
