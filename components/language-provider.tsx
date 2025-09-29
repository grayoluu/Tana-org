"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem("tana-language") as Language
    if (saved && (saved === "en" || saved === "sw")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("tana-language", lang)
    // Update document lang attribute for accessibility
    document.documentElement.lang = lang === "sw" ? "sw" : "en"
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
