export default function GalleryPage() {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-4">Photo Gallery</h1>
              <p className="text-xl text-text-muted dark:text-gray-400">
                Visual stories from our projects, events, and the transformation of Samarkand.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-md hover:bg-primary-dark transition-colors">All Photos</button>
              <button className="px-4 py-2 bg-white dark:bg-surface-dark text-text-muted dark:text-gray-300 text-sm font-bold rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors">Construction</button>
              <button className="px-4 py-2 bg-white dark:bg-surface-dark text-text-muted dark:text-gray-300 text-sm font-bold rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors">Events</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2e5G9w1mJ8kP4qH1zT6bV9cW3kE5sX0tA4R8mD3nB2gG6jH9pM2lK5oN7qV8xY0uZ3wT6_sR4jC7i1eL9vB2kM5nO_P0xH8gT3qF6lJ9mX4bV1cW7yA3zD5eR2fG0hI8jK4lL6mN9nB7oO5pC1qR4sT3wV8uY0xZ2aB5dC6eF9gH1iJ3kL5mN7nP9oQ6rS8tV2wU4xY6zD8aB0cE2fG5hJ7kL9oP3qS1tV4wX6y" alt="Construction site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Infrastructure</div>
                  <h3 className="text-white text-lg font-bold">New Airport Terminal</h3>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe7iTrRvxa9Gy434MzWmYkFJZPNGNR1u57Wd553zid3t0rVh8mpZ3VS_G6fGUZp7zFIFqP4UpSSziqBfPcXT1mTkPYR0HBbdXHyMSPfQUSO5XsxSGwTugrd_c6Y1Xz985SVhDXCErPz_osMP5nOn3gYijpl9RyvnNHzw2_s3vVl3buZ_e53401V8L1az_qGOQXprKUnGMWqkkmEDB131_QWykDDr0Xfw2zyhofd0tj9vUP3Z4_fzB-Y3SKyA0eQs0qtTKasmlgJZM" alt="Cultural event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Culture</div>
                  <h3 className="text-white text-lg font-bold">Silk Road Festival 2023</h3>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9XctVenwj9ru0D_B3KLbJOq3Em4PUkWlN_A3jSarkeDC7ddPZxuYMw8-OSfmjlBuZnG7xRkZUB0u-k1oHAFDFEkyCWD4X2Spxseh6yiPnj8KSTflBiE1nizB_MT9oidgZMH2ahelMd0MJD5i2PsJUf1uo5AKV_f3tvK3by6FS6yId0664c0F6j1t8a5mB-vthG1UiGExjcOlFyc2M1lb56iXzsXpuEXTYsbwi3riJj1iFVhL4yPp6Hrb2un5W_nsz9mGK2f4ZI3g" alt="Project meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Meeting</div>
                  <h3 className="text-white text-lg font-bold">Strategic Planning Session</h3>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-ho82VhHlhWjYWdhJdF6kvoJmcu9mYqBb2SBi6xf4tS6ZJyjm7qOrb2mVbkojKeehhr6QiU_8aCwHD8JdvY85UWTQoaA81PmLaQHADhsXKHRsvno_l2JSB4y89m79dxFdCE3CrXx0Gn-FedvKxH54mRdltOVQUEP6JLVHuB4CqOeyjOm8BxDppb67bvHFYP4rQqgy1JTWcP12puY-mZQWxC3EfF41kV2QxDVDK6bu2lBRSSEcGSdxpuArYYQYWO_Bb4oIz-v_kU" alt="Education" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <div>
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Education</div>
                  <h3 className="text-white text-lg font-bold">IT Hub Opening Ceremony</h3>
                </div>
              </div>
            </div>

            {/* Placeholder Items for grid effect */}
            {[5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-6xl">image</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              Load More Photos <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
