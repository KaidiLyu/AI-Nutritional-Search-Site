"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加实际的登录逻辑
    console.log("登录尝试", { email, password })
    // 模拟登录成功
    alert("登录成功！")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md p-6 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{t("login.title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              {t("login.email")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              {t("login.password")}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400/50"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-400 focus:ring-green-400"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                {t("login.rememberMe")}
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-green-400 hover:text-green-300">
                {t("login.forgotPassword")}
              </a>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90">
            {t("login.loginButton")}
          </Button>

          <div className="text-center text-sm text-gray-400">
            {t("login.noAccount")}{" "}
            <a href="#" className="text-green-400 hover:text-green-300">
              {t("login.register")}
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

