"use client"

import { X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { t } = useLanguage()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md p-6 relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{t("download.title")}</h2>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg mb-4">
            {/* 这里使用一个QR码图片，您可以替换为实际的QR码 */}
            <div className="w-[200px] h-[200px] bg-black flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-2">扫描下载</div>
                <div className="w-32 h-32 mx-auto border-2 border-white grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-transparent"}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300 mb-6">{t("download.scanQR")}</p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="white"
                />
                <path
                  d="M15.88 8.29L10.15 4.4C9.77 4.14 9.29 4 8.8 4C7.25 4 6 5.25 6 6.8V17.2C6 18.75 7.25 20 8.8 20C9.29 20 9.77 19.86 10.15 19.6L15.88 15.71C16.5 15.26 16.92 14.5 16.92 13.71C16.92 12.91 16.5 12.15 15.88 11.7L15.88 8.29Z"
                  fill="white"
                />
              </svg>
              <span>{t("download.appStore")}</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 3H6.5C5.12 3 4 4.12 4 5.5V18.5C4 19.88 5.12 21 6.5 21H17.5C18.88 21 20 19.88 20 18.5V5.5C20 4.12 18.88 3 17.5 3ZM12 17.5L6.5 12L8.29 10.21L12 13.92L15.71 10.21L17.5 12L12 17.5Z"
                  fill="white"
                />
              </svg>
              <span>{t("download.googlePlay")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

