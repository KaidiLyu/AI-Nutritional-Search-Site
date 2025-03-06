"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Camera, Database, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TeamMember from "@/components/team-member"
import FeatureCard from "@/components/feature-card"
import AppDemo from "@/components/app-demo"
import HeroGradient from "@/components/hero-gradient"
import LoginModal from "@/components/login-modal"
import DownloadModal from "@/components/download-modal"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { scrollToElement } from "@/utils/scroll-utils"

export default function Home() {
  const router = useRouter()
  const { t } = useLanguage()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const handleDownloadClick = () => {
    setIsDownloadModalOpen(true)
  }

  const handleLearnMoreClick = () => {
    router.push("/learn-more")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 登录模态框 */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />

      {/* 下载模态框 */}
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <span className="font-bold text-lg">IL</span>
            </div>
            <span className="font-bold text-xl">InfiniteLoopers</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToElement("features")
              }}
            >
              {t("nav.features")}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToElement("how-it-works")
              }}
            >
              {t("nav.howItWorks")}
            </a>
            <a
              href="#team"
              className="hover:text-green-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToElement("team")
              }}
            >
              {t("nav.team")}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10"
              onClick={() => setIsLoginModalOpen(true)}
            >
              {t("nav.login")}
            </Button>
            <Button
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90"
              onClick={handleDownloadClick}
            >
              {t("nav.download")}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <HeroGradient />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                {t("hero.title1")}
              </span>
              <br />
              {t("hero.title2")}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">{t("hero.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-lg px-8"
                onClick={handleDownloadClick}
              >
                {t("hero.downloadNow")}
                <Download className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-lg px-8"
                onClick={handleLearnMoreClick}
              >
                {t("hero.learnMore")}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <AppDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t("features.title")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="w-10 h-10" />}
              title={t("features.imageRecognition.title")}
              description={t("features.imageRecognition.description")}
            />
            <FeatureCard
              icon={<Search className="w-10 h-10" />}
              title={t("features.smartSearch.title")}
              description={t("features.smartSearch.description")}
            />
            <FeatureCard
              icon={<Database className="w-10 h-10" />}
              title={t("features.database.title")}
              description={t("features.database.description")}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t("howItWorks.title")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("howItWorks.step1.title")}</h3>
                    <p className="text-gray-400">{t("howItWorks.step1.description")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("howItWorks.step2.title")}</h3>
                    <p className="text-gray-400">{t("howItWorks.step2.description")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("howItWorks.step3.title")}</h3>
                    <p className="text-gray-400">{t("howItWorks.step3.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t("team.title")}
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <TeamMember name="Kaidi Lyu" email="klyu@email.sc.edu" image="/placeholder.svg?height=200&width=200" />
            <TeamMember
              name="Yingdong Feng"
              email="yingdong@email.sc.edu"
              image="/placeholder.svg?height=200&width=200"
            />
            <TeamMember
              name="Kiran Chhetri"
              email="chhetrik@email.sc.edu"
              image="/placeholder.svg?height=200&width=200"
            />
            <TeamMember
              name="Andrew Dhillon"
              email="dhillons@email.sc.edu"
              image="/placeholder.svg?height=200&width=200"
            />
            <TeamMember name="Logan Munn" email="ljmunn@email.sc.edu" image="/placeholder.svg?height=200&width=200" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("cta.title")}</h2>
            <p className="text-xl text-gray-300 mb-10">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-lg px-8"
                onClick={handleDownloadClick}
              >
                {t("cta.appStore")}
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-lg px-8"
                onClick={handleDownloadClick}
              >
                {t("cta.googlePlay")}
              </Button>
            </div>
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

