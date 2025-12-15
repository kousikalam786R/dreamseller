'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Mail, Phone } from 'lucide-react'

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      icon: MessageCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20 hover:bg-green-500/30'
    },
    {
      label: 'Email',
      href: 'mailto:contact@dreamseller.com',
      icon: Mail,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20 hover:bg-blue-500/30'
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-2"
          >
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : '_self'}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-3 ${option.bgColor} glass-effect px-4 py-3 rounded-lg transition-all duration-200 min-w-[160px]`}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className={option.color} size={20} />
                  <span className="text-white font-medium">{option.label}</span>
                </motion.a>
              )
            })}
            
            <motion.button
              onClick={scrollToContact}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: contactOptions.length * 0.1 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-primary-purple to-primary-cyan px-4 py-3 rounded-lg transition-all duration-200 min-w-[160px] w-full"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="text-white" size={20} />
              <span className="text-white font-medium">Contact Form</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-primary-purple to-primary-cyan text-white shadow-lg shadow-primary-purple/50 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        } transition-transform duration-200`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact options"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </motion.button>
    </div>
  )
}

export default FloatingContactButton

