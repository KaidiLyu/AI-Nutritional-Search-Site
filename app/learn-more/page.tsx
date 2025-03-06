"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function LearnMore() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <span className="font-bold text-lg">IL</span>
            </div>
            <span className="font-bold text-xl">InfiniteLoopers</span>
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span>{t("nav.backToHome")}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-green-500/20 via-blue-500/10 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                {t("learnMore.title")}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10">{t("learnMore.description")}</p>
          </div>
        </div>
      </section>

      {/* App Details */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {t("learnMore.whyChoose")}
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t("learnMore.feature1.title")}</h3>
                    <p className="text-gray-400">{t("learnMore.feature1.description")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t("learnMore.feature2.title")}</h3>
                    <p className="text-gray-400">{t("learnMore.feature2.description")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t("learnMore.feature3.title")}</h3>
                    <p className="text-gray-400">{t("learnMore.feature3.description")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{t("learnMore.feature4.title")}</h3>
                    <p className="text-gray-400">{t("learnMore.feature4.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] bg-gradient-to-b from-green-400/20 to-blue-500/20 rounded-[40px] p-3">
                <div className="w-full h-full bg-black rounded-[32px] overflow-hidden border border-white/20">
                  <Image
                    src="/placeholder.svg?height=800&width=400"
                    alt="App Interface"
                    width={400}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-40 h-40 bg-green-400/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t("learnMore.technical")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3">{t("learnMore.tech1.title")}</h3>
              <p className="text-gray-400">{t("learnMore.tech1.description")}</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3">{t("learnMore.tech2.title")}</h3>
              <p className="text-gray-400">{t("learnMore.tech2.description")}</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-3">{t("learnMore.tech3.title")}</h3>
              <p className="text-gray-400">{t("learnMore.tech3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t("learnMore.faq")}
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">{t("learnMore.faq1.title")}</h3>
              <p className="text-gray-400">{t("learnMore.faq1.description")}</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">{t("learnMore.faq2.title")}</h3>
              <p className="text-gray-400">{t("learnMore.faq2.description")}</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">{t("learnMore.faq3.title")}</h3>
              <p className="text-gray-400">{t("learnMore.faq3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("learnMore.ready")}</h2>
            <p className="text-xl text-gray-300 mb-10">{t("learnMore.download")}</p>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-lg px-8">
                {t("learnMore.backToHome")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <span className="font-bold text-sm">IL</span>
              </div>
              <span className="font-bold">InfiniteLoopers</span>
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} InfiniteLoopers. {t("footer.rights")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

