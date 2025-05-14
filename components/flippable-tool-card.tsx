"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

interface Tool {
  name: string
  icon: IconType
  description?: string
}

interface FlippableToolCardProps {
  title: string
  tools: Tool[]
  icon: IconType
}


export default function FlippableToolCard({
  title,
  tools,
  icon: Icon,
}: FlippableToolCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-64 perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#FDF6ED] shadow-md p-6 flex flex-col items-center justify-center text-center">
<Icon
  className="w-12 h-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500"
  style={{ fill: "currentColor", color: "#333" }} // Light shade of black
/>

          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-black/70 text-sm">
            {tools.length} {tools.length === 1 ? "tool" : "tools"} available
          </p>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 rotateY-180">
          <div className="w-full h-full rounded-xl bg-[#FDF6ED] shadow-md p-6 flex flex-col">
            <div className="flex items-center justify-center mb-2">
<Icon
  className="w-6 h-6 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500"
  style={{ color: "blue" }}
/>
              <h4 className="text-lg font-bold text-black text-center">{title} Tools</h4>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              <div className="flex flex-col gap-3">
                {tools.map((tool, index) => {
                  const ToolIcon = tool.icon
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <ToolIcon className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{tool.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
