"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { dictionaries, Locale } from "@/lib/dictionaries";

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (typeof dictionaries)["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language on client mount
  useEffect(() => {
    const saved = localStorage.getItem("ys-language") as Locale | null;
    if (saved && (saved === "en" || saved === "ru" || saved === "uz")) {
      // eslint-disable-next-line
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem("ys-language", lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  };

  // Update html lang on mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const value = {
    language,
    setLanguage,
    t: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
