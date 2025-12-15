'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const footerLinks = {
    company: [
      { label: 'Products', id: 'products' },
      { label: 'Services', id: 'services' },
      { label: 'How We Work', id: 'process' },
      { label: 'About', id: 'about' },
    ],
    resources: [
      { label: 'Contact Us', id: 'contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@dreamseller.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: Github, href: 'https://github.com/dreamseller', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/dreamseller', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dreamseller', label: 'Twitter' },
  ]

  return (
    <footer className="bg-dark-card/30 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-bold gradient-text">DreamSeller</h3>
            </motion.button>
            <p className="text-gray-400 mb-4 leading-relaxed max-w-md">
              Enterprise AI solutions and custom software development company. 
              Building innovative products that transform businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-dark-card/70 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <IconComponent 
                      size={20} 
                      className="text-gray-400 group-hover:text-primary-purple transition-colors duration-300" 
                    />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => link.id && scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.id ? (
                    <motion.button
                      onClick={() => scrollToSection(link.id!)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DreamSeller. All rights reserved.
          </p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

