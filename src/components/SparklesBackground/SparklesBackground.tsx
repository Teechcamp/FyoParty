"use client"
import { motion } from 'framer-motion'
import { SparklesIcon } from 'lucide-react'
import React, { memo, useEffect, useState } from 'react'

const SparklesBackground = memo(() => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if(typeof window !== 'undefined') {

      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1, 0.8],
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <SparklesIcon className="h-2 w-2 text-white/40" />
          </motion.div>
        ))}
      </div>
  )
})

export default SparklesBackground