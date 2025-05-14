"use client"

import { motion, type MotionValue } from "framer-motion"
import { IconType } from "react-icons" // Import IconType from react-icons

interface Category {
  id: string
  title: string
  description: string
  icon: IconType // Change to IconType from react-icons
}

interface CategoryCardProps {
  category: Category
  isActive: boolean
  onClick: () => void
  xOffset: MotionValue<number>
  yOffset: MotionValue<number>
}

export default function CategoryCard({ category, isActive, onClick, xOffset, yOffset }: CategoryCardProps) {
  return (
    <motion.div
      className={`
        p-[2px] rounded-xl 
        ${isActive ? "bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500" : ""}
        transition-all duration-300
      `}
    >
      <motion.div
        className={`
          cursor-pointer rounded-xl bg-[#FDF6ED] shadow-md p-4 
          flex flex-col items-center justify-center text-center
          transition-all duration-300
          ${isActive ? "shadow-lg" : "hover:shadow-lg"}
        `}
        onClick={onClick}
        style={{
          // x: xOffset,
          // y: yOffset,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <category.icon
  className="w-6 h-6 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-purple-500"
  style={{ color: "pink" }} // Optional inline style for a fallback color or specific color
/>
        <h3 className="text-lg font-bold text-black mb-1">{category.title}</h3>
        <p className="text-black/70 text-xs line-clamp-2">{category.description}</p>
      </motion.div>
    </motion.div>
  )
}
