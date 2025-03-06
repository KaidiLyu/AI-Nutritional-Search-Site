"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

export default function AppDemo() {
  const [searchText, setSearchText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const searchQueries = ["苹果的营养成分", "一杯牛奶的蛋白质含量", "鸡胸肉的卡路里", "香蕉的碳水化合物"]

  useEffect(() => {
    if (!isTyping) return

    const query = searchQueries[currentIndex]

    if (searchText.length < query.length) {
      const timer = setTimeout(() => {
        setSearchText(query.substring(0, searchText.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
      const timer = setTimeout(() => {
        setSearchText("")
        setCurrentIndex((currentIndex + 1) % searchQueries.length)
        setIsTyping(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [searchText, isTyping, currentIndex])

  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-green-400/20 to-blue-500/20 rounded-[40px] p-3">
      <div className="w-full h-full bg-black rounded-[32px] overflow-hidden border border-white/20 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <input
              type="text"
              value={searchText}
              readOnly
              className="w-full bg-white/5 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              placeholder="搜索食物营养信息..."
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
            {isTyping && <div className="absolute right-3 top-2.5 h-5 w-1 bg-green-400 animate-pulse"></div>}
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-4">
          <div className="text-center text-white/50 text-sm">{isTyping ? "正在搜索..." : "搜索结果"}</div>

          {!isTyping && (
            <div className="animate-fade-in">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400/30 to-blue-500/30 flex items-center justify-center">
                    <span className="text-2xl">🍎</span>
                  </div>
                  <div>
                    <h3 className="font-bold">苹果</h3>
                    <p className="text-sm text-white/70">中等大小 (182g)</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-xs text-white/70">卡路里</p>
                    <p className="font-bold">95 kcal</p>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-xs text-white/70">碳水化合物</p>
                    <p className="font-bold">25g</p>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-xs text-white/70">蛋白质</p>
                    <p className="font-bold">0.5g</p>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-xs text-white/70">纤维素</p>
                    <p className="font-bold">4.4g</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

