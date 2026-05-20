"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/dictionaries";
import { usePathname, useRouter } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const LangButton = ({
  lang,
  currentLang,
  setLang,
}: {
  lang: Locale;
  currentLang: string;
  setLang: (l: Locale) => void;
}) => {
  const isActive = currentLang === lang;
  
  return (
    <button
      onClick={() => setLang(lang)}
      className={`cursor-pointer transition-colors duration-300 ${
        isActive 
          ? "text-primary dark:text-[#D49D60] font-bold" 
          : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
      }`}
      aria-label={`Switch language to ${lang.toUpperCase()}`}
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Scroll spy to update active section and scroll state
  useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScrollState);
    handleScrollState(); // initial run

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

    return () => {
      window.removeEventListener("scroll", handleScrollState);
      observer.disconnect();
    };
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
    <header className="sticky top-0 z-50 w-full transition-all duration-500 bg-white/80 dark:bg-[#111d21]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div 
        className={`px-4 md:px-10 flex items-center justify-between max-w-[1280px] mx-auto transition-all duration-500 ${
          isScrolled ? "py-2.5" : "py-4 md:py-5"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="group">
          <Logo iconSize={isScrolled ? "size-9" : "size-11"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-1.5">
            {navItems.map((item) => {
              const hash = item.path.substring(item.path.indexOf("#"));
              const sectionId = hash.replace("#", "");
              const isActive = pathname === "/" 
                ? activeSection === hash
                : pathname.startsWith(`/${sectionId}`);
                
              const activeClass = "text-primary dark:text-[#D49D60] bg-primary/5 dark:bg-[#D49D60]/10 font-semibold";
              const inactiveClass = "text-[#0e171b] dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5";

              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive ? activeClass : inactiveClass
                  }`}
                  onClick={(e) => handleScroll(e, item.path)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 transition-colors duration-500"></div>

          {/* Dark Mode Toggle + Language Switcher */}
          <div className="flex items-center gap-5">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="size-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-[#D49D60] hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="size-5 transition-transform duration-500 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="size-5 transition-transform duration-500 rotate-0 hover:-rotate-12" />
              )}
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <LangButton
                lang="uz"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <LangButton
                lang="ru"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-700">|</span>
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
          className="lg:hidden p-1.5 rounded-lg transition-all duration-300 text-[#0e171b] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#111d21]/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-2xl py-5 px-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-3.5">
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
                  className={`text-sm font-semibold tracking-wide uppercase px-4 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary dark:text-[#D49D60] bg-primary/5 dark:bg-[#D49D60]/10 font-bold"
                      : "text-[#0e171b] dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  }`}
                  onClick={(e) => handleScroll(e, item.path)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="h-px w-full bg-gray-100/80 dark:bg-gray-800/50"></div>

          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              <LangButton
                lang="uz"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <LangButton
                lang="ru"
                currentLang={language}
                setLang={setLanguage}
              />
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <LangButton
                lang="en"
                currentLang={language}
                setLang={setLanguage}
              />
            </div>
            {/* Mobile dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="size-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-[#D49D60] hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="size-5 transition-transform duration-500 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="size-5 transition-transform duration-500 rotate-0 hover:-rotate-12" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Ambient warm gold glowing line */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D49D60]/50 to-transparent transition-opacity duration-700 pointer-events-none ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`} 
      />
    </header>
  );
}
