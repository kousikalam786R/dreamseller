'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  // Create deterministic particle data to avoid hydration mismatch
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: ((i * 7) % 100) + (i % 20), // Deterministic positioning
    top: ((i * 11) % 100) + (i % 15),
    duration: 2 + (i % 3), // 2-4 seconds
    delay: (i % 2) * 0.5, // 0 or 0.5 seconds
  }))

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToContact = () => {
    scrollToSection('contact')
  }

  const scrollToProducts = () => {
    scrollToSection('products')
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-purple/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Web & Mobile App Development</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto"
        >
          We build custom websites and mobile applications with AI-powered features that drive efficiency, reduce costs, and accelerate your business growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base text-gray-400 mb-10"
        >
          Trusted by forward-thinking companies worldwide
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
          >
            Get a Free Consultation
          </button>
          <button 
            onClick={scrollToProducts}
            className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-dark-card/70 transition-all duration-300 text-base md:text-lg"
          >
            View Our Products
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer hover:text-white transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero