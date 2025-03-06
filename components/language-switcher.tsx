"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-1 border-white/20 hover:bg-white/10"
      onClick={toggleLanguage}
    >
      <Globe size={16} />
      <span>{language === "en" ? "中文" : "English"}</span>
    </Button>
  )
}

