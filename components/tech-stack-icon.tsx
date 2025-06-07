"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

interface TechStackIconProps {
  icon: string
  name: string
}

export function TechStackIcon({ icon, name }: TechStackIconProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [25, -25])
  const rotateY = useTransform(x, [-100, 100], [-25, 25])
  const scale = useMotionValue(1)
  const boxShadow = useTransform(
    scale,
    [1, 1.1],
    [
      "0 0 0 rgba(124, 58, 237, 0)",
      "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)"
    ]
  )

  useEffect(() => {
    animate(x, 0, { duration: 0.5 })
    animate(y, 0, { duration: 0.5 })
    animate(scale, 1, { duration: 0.5 })
  }, [x, y, scale])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2
    
    animate(x, xPct * 75, { 
      type: "spring",
      stiffness: 300,
      damping: 20
    })
    animate(y, yPct * 75, {
      type: "spring",
      stiffness: 300,
      damping: 20
    })
  }

  const handleMouseEnter = () => {
    animate(scale, 1.1, { 
      type: "spring",
      stiffness: 400,
      damping: 20
    })
  }

  const handleMouseLeave = () => {
    animate(x, 0, {
      type: "spring",
      stiffness: 400,
      damping: 30
    })
    animate(y, 0, {
      type: "spring",
      stiffness: 400,
      damping: 30
    })
    animate(scale, 1, {
      type: "spring",
      stiffness: 400,
      damping: 20
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          scale,
          boxShadow,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-colors duration-300 hover:border-purple-500/50 group cursor-pointer"
      >
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(-1px)"
          }}
        />
        
        <motion.div className="relative w-28 h-28 flex items-center justify-center">
          <motion.img
            src={`/icons/${icon}`}
            alt={name}
            className="w-24 h-24 object-contain"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)"
            }}
          />
        </motion.div>
      </motion.div>
      
      <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  )
}
