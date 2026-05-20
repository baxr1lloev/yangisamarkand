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
  isScrolled,
}: {
  lang: Locale;
  currentLang: string;
  setLang: (l: Locale) => void;
  isScrolled: boolean;
}) => {
  const isActive = currentLang === lang;
  
  let textClass = "";
  if (isScrolled) {
    textClass = isActive
      ? "text-primary dark:text-[#D49D60] font-bold"
      : "text-slate-550 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
  } else {
    textClass = isActive
      ? "text-[#D49D60] font-bold"
      : "text-white/80 hover:text-white";
  }

  return (
    <button
      onClick={() => setLang(lang)}
      className={`cursor-pointer transition-all duration-200 text-[13px] font-semibold tracking-wider ${textClass}`}
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

  // Scroll spy
  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScrollState);
    handleScrollState();

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

  // State-based dynamic styles
  // When at top (not scrolled), we use transparent capsule directly overlaying the hero image
  const headerContainerClass = isScrolled
    ? "bg-white/95 dark:bg-[#111d21]/95 border-slate-200/60 dark:border-white/[0.08] shadow-md"
    : "bg-slate-900/40 border-white/10 shadow-lg shadow-black/5";

  const logoTextColor = isScrolled
    ? "text-slate-900 dark:text-white"
    : "text-white";

  const dividerClass = isScrolled
    ? "bg-slate-200 dark:bg-white/10"
    : "bg-white/20";

  const switcherContainerClass = isScrolled
    ? "bg-slate-100/60 dark:bg-white/[0.04] border-slate-200/30 dark:border-white/5"
    : "bg-white/10 border-white/10";

  const switcherDividerColor = isScrolled
    ? "text-slate-300 dark:text-white/10"
    : "text-white/20";

  const toggleBtnClass = isScrolled
    ? "bg-slate-100 dark:bg-white/[0.05] border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-[#D49D60] hover:bg-slate-250 dark:hover:bg-white/10"
    : "bg-white/10 border-white/10 text-white hover:text-[#D49D60] hover:bg-white/20";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none">
      <header
        className={`mx-auto max-w-[1280px] rounded-2xl border backdrop-blur-md transition-all duration-500 pointer-events-auto ${headerContainerClass}`}
      >
        <div className="px-5 py-3 md:py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo
              iconSize="size-9"
              textColor={logoTextColor}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const hash = item.path.substring(item.path.indexOf("#"));
                const sectionId = hash.replace("#", "");
                const isActive =
                  pathname === "/"
                    ? activeSection === hash
                    : pathname.startsWith(`/${sectionId}`);

                let navTextClass = "";
                let indicatorColor = "";
                
                if (isScrolled) {
                  navTextClass = isActive
                    ? "text-primary dark:text-[#D49D60] font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white";
                  indicatorColor = "bg-primary dark:bg-[#D49D60]";
                } else {
                  navTextClass = isActive
                    ? "text-[#D49D60] font-bold"
                    : "text-white/80 hover:text-white";
                  indicatorColor = "bg-[#D49D60]";
                }

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`relative text-[15.5px] font-semibold px-4 py-2 transition-all duration-200 ${navTextClass}`}
                    onClick={(e) => handleScroll(e, item.path)}
                  >
                    {item.name}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full transition-all duration-200 ${indicatorColor} ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className={`h-5 w-px transition-colors duration-500 ${dividerClass}`} />

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-500 ${switcherContainerClass}`}>
                <LangButton lang="uz" currentLang={language} setLang={setLanguage} isScrolled={isScrolled} />
                <span className={`text-[10px] ${switcherDividerColor}`}>|</span>
                <LangButton lang="ru" currentLang={language} setLang={setLanguage} isScrolled={isScrolled} />
                <span className={`text-[10px] ${switcherDividerColor}`}>|</span>
                <LangButton lang="en" currentLang={language} setLang={setLanguage} isScrolled={isScrolled} />
              </div>

              {/* Dark Mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`size-9 rounded-full flex items-center justify-center border transition-all duration-500 ${toggleBtnClass}`}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="size-[17px]" />
                ) : (
                  <Moon className="size-[17px]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-[#111d21]/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-2xl py-4 px-5 flex flex-col gap-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const hash = item.path.substring(item.path.indexOf("#"));
                const sectionId = hash.replace("#", "");
                const isActive =
                  pathname === "/"
                    ? activeSection === hash
                    : pathname.startsWith(`/${sectionId}`);
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "text-primary dark:text-[#D49D60] bg-slate-100 dark:bg-white/5 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                    }`}
                    onClick={(e) => handleScroll(e, item.path)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            <div className="h-px w-full bg-slate-150 dark:bg-white/5" />

            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <LangButton lang="uz" currentLang={language} setLang={setLanguage} isScrolled={true} />
                <span className="text-slate-300 dark:text-white/10">|</span>
                <LangButton lang="ru" currentLang={language} setLang={setLanguage} isScrolled={true} />
                <span className="text-slate-300 dark:text-white/10">|</span>
                <LangButton lang="en" currentLang={language} setLang={setLanguage} isScrolled={true} />
              </div>
              <button
                onClick={toggleDarkMode}
                className="size-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
