"use client";
import React from 'react';

export default function PartnersPage() {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">Partnerships & Memorandums</h1>
            <p className="text-xl text-text-muted dark:text-gray-400 leading-relaxed">
              We collaborate with leading international organizations, financial institutions, and government bodies to drive sustainable development in Samarkand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Memorandum Item 1 */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7s7V4SgH3XmJ7qXgT0bL2yX9cWkF5sZ0tA4R1dE3nB8_G6jH9pM2lK5oN7qV8xY0uZ3wT6_sR4jC7i1eL9vB2kM5nO_P0xH8gT3qF6lJ9mX4bV1cW7yA3zD5eR2fG0hI8jK4lL6mN9nB7oO5pC1qR4sT3wV8uY0xZ2aB5dC6eF9gH1iJ3kL5mN7nP9oQ6rS8tV2wU4xY6zD8aB0cE2fG5hJ7kL9oP3qS1tV4wX6y" alt="UNESCO Logo" className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">Active</span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">Signed: October 12, 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">UNESCO World Heritage Centre</h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Memorandum of Understanding on the preservation of historical sites in Samarkand and implementation of sustainable tourism practices compliant with heritage standards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <span className="material-symbols-outlined">description</span> View Document
                  </button>
                  <button className="flex items-center gap-2 text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">link</span> Official Website
                  </button>
                </div>
              </div>
            </div>

            {/* Memorandum Item 2 */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8kF2sJ5wL7pG4qH1zT6bV9cW3kE5sX0tA4R8mD3nB2gG6jH9pM2lK5oN7qV8xY0uZ3wT6_sR4jC7i1eL9vB2kM5nO_P0xH8gT3qF6lJ9mX4bV1cW7yA3zD5eR2fG0hI8jK4lL6mN9nB7oO5pC1qR4sT3wV8uY0xZ2aB5dC6eF9gH1iJ3kL5mN7nP9oQ6rS8tV2wU4xY6zD8aB0cE2fG5hJ7kL9oP3qS1tV4wX6y" alt="EBRD Logo" className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">Active</span>
                   <span className="text-text-muted dark:text-gray-500 text-sm font-medium">Signed: August 28, 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">European Bank for Reconstruction and Development</h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Strategic partnership to finance green infrastructure projects in Samarkand, focusing on electric public transport and water management systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <span className="material-symbols-outlined">description</span> View Document
                  </button>
                  <button className="flex items-center gap-2 text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">link</span> Official Website
                  </button>
                </div>
              </div>
            </div>

             {/* Memorandum Item 3 */}
             <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2sD9fG4hL6kP5qW1zT8cV9dW3kE4sX0tA5R7mD2nB1gG5jH8pM3lK4oN6qV9xY1uZ2wT5_sR3jC8i1eL0vB3kM4nO_P1xH7gT2qF5lJ8mX5bV0cW6yA4zD6eF8gH2iJ4kL3mN8nP0oQ5rS9tV3wU5xY7zD9aB1cE3fG4hJ6kL0oP2qS0tV5wX6y" alt="JICA Logo" className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">Pending</span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">Expected: Dec 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">Japan International Cooperation Agency</h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Collaboration on the "Smart Samarkand" digitaization initiative, including traffic management systems and e-governance platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                   <button className="flex items-center gap-2 text-text-muted dark:text-gray-500 cursor-not-allowed">
                    <span className="material-symbols-outlined">lock</span> Confidential
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 px-4 md:px-10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl font-bold">Interested in Partnering?</h2>
          <p className="text-white/80 text-lg">
            We are always open to new collaborations that align with our mission to develop Samarkand sustainably. Let's discuss how we can work together.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg mt-2">
            Contact Partnership Dept.
          </button>
        </div>
      </section>
    </>
  );
}
