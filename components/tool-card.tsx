"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Tool {
  name: string
  icon: LucideIcon
  description?: string
}

interface Category {
  id: string
  title: string
  description: string
  icon: LucideIcon
  tools: Tool[]
}

interface ToolCardProps {
  category: Category
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

export default function ToolCard({ category, isActive, onMouseEnter, onMouseLeave, onClick }: ToolCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
    onMouseEnter()
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
    onMouseLeave()
  }

  return (
    <div
      className={`h-48 perspective-1000 cursor-pointer ${isActive ? "ring-2 ring-offset-2 ring-gradient" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-white shadow-md p-4 flex flex-col items-center justify-center text-center">
          <category.icon className="w-10 h-10 mb-3 text-gradient" />
          <h3 className="text-lg font-bold text-black mb-1">{category.title}</h3>
          <p className="text-black/70 text-xs line-clamp-2">{category.description}</p>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-white shadow-md p-4 flex flex-col rotateY-180">
          <h4 className="text-sm font-bold text-black mb-2 text-center">Featured Tools</h4>
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <div className="flex flex-col gap-2">
              {category.tools.slice(0, 5).map((tool, index) => (
                <div key={index} className="flex items-center gap-1">
                  <tool.icon className="w-4 h-4 text-gradient flex-shrink-0" />
                  <span className="text-xs text-gray-700 truncate">{tool.name}</span>
                </div>
              ))}
              {category.tools.length > 5 && (
                <p className="text-xs text-center text-black/50 mt-1">+{category.tools.length - 5} more tools</p>
              )}
            </div>
          </div>
          <p className="text-xs text-center text-black/50 mt-2">Click to view all</p>
        </div>
      </motion.div>
    </div>
  )
}
