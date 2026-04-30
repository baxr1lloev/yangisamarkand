"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/dictionaries";
import { usePathname, useRouter } from "next/navigation";

const LangButton = ({
  lang,
  currentLang,
  setLang,
}: {
  lang: Locale;
  currentLang: string;
  setLang: (l: Locale) => void;
}) => (
  <button
    onClick={() => setLang(lang)}
    className={`cursor-pointer ${currentLang === lang ? "text-primary dark:text-primary-light font-bold" : "hover:text-primary transition-colors"}`}
    aria-label={`Switch language to ${lang.toUpperCase()}`}
  >
    {lang.toUpperCase()}
  </button>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem("ys-dark-mode");
    if (saved === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (saved === "false") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Follow system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Scroll spy to update active section
  useEffect(() => {
    setActiveSection(window.location.hash);

    const sectionIds = ["about", "news", "projects", "partners", "council", "gallery", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px" }
    );

    setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 500);

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem("ys-dark-mode", String(newValue));
    if (newValue) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { name: t.nav.about, path: "/#about" },
    { name: t.nav.news, path: "/#news" },
    { name: t.nav.projects, path: "/#projects" },
    { name: t.nav.partners, path: "/#partners" },
    { name: t.nav.council, path: "/#council" },
    { name: t.nav.gallery, path: "/#gallery" },
    { name: t.nav.contact, path: "/#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const hash = path.substring(path.indexOf("#"));
    setActiveSection(hash);

    if (pathname === "/") {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e8f0f3] dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
            <img
              src="/images/logo/logo.png"
              alt="Yangi Samarqand Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            YANGI SAMARQAND
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const hash = item.path.substring(item.path.indexOf("#"));
              const sectionId = hash.replace("#", "");
              const isActive = pathname === "/" 
                ? activeSection === hash
                : pathname.startsWith(`/${sectionId}`);
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive
                      ? "text-primary dark:text-primary-light font-bold underline underline-offset-4 decoration-2"
                      : "text-[#0e171b] dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  }`}
                  onClick={(e) => handleScroll(e, item.path)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

          {/* Dark Mode Toggle + Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="size-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-xl">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <LangButton
                lang="uz"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <LangButton
                lang="ru"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <LangButton
                lang="en"
                currentLang={language}
                setLang={setLanguage}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-[#0e171b] dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 shadow-xl py-4 px-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const hash = item.path.substring(item.path.indexOf("#"));
              const sectionId = hash.replace("#", "");
              const isActive = pathname === "/" 
                ? activeSection === hash
                : pathname.startsWith(`/${sectionId}`);
              return (
              <a
                key={item.name}
                href={item.path}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary dark:text-primary-light font-bold underline underline-offset-4 decoration-2"
                    : "text-[#0e171b] dark:text-gray-300 hover:text-primary"
                }`}
                onClick={(e) => handleScroll(e, item.path)}
              >
                {item.name}
              </a>
            )})}
          </nav>

          <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400">
              <LangButton
                lang="uz"
                currentLang={language}
                setLang={setLanguage}
              />
              <span>|</span>
              <LangButton
                lang="ru"
                currentLang={language}
                setLang={setLanguage}
              />
              <span>|</span>
              <LangButton
                lang="en"
                currentLang={language}
                setLang={setLanguage}
              />
            </div>
            {/* Mobile dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="size-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-xl">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
