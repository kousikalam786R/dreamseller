'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'How We Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-primary-purple/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text">
                DreamSeller
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-cyan group-hover:w-full transition-all duration-300"
                  />
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-effect rounded-lg hover:bg-dark-card/70 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="text-gray-300 hover:text-green-400" size={20} />
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 glass-effect rounded-lg"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-bg/98 backdrop-blur-md border-t border-gray-700/50"
            >
              <nav className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-dark-card/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                <div className="pt-4 border-t border-gray-700/50 mt-4 space-y-2">
                  <motion.a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-dark-card/50 rounded-lg transition-all duration-200"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </motion.a>
                  
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Header

