'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  
  // Only apply animation for home page and auth pages
  const shouldAnimate = pathname === '/' || pathname.startsWith('/auth/')

  if (!shouldAnimate) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 