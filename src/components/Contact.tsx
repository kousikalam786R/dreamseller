'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@dreamseller.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/dreamseller', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/dreamseller', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dreamseller', label: 'Twitter' },
  ]

  return (
    <section ref={ref} className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Let's build something great together.
          </p>
          <p className="text-lg text-gray-400">
            Ready to transform your ideas into reality? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-600 rounded-lg focus:border-primary-purple focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-600 rounded-lg focus:border-primary-purple focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-gray-600 rounded-lg focus:border-primary-purple focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're always excited to discuss new projects and opportunities. 
                Whether you need AI automation, custom development, or have questions 
                about our products, we're here to help.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 glass-effect rounded-lg hover:bg-dark-card/70 transition-all duration-300 group"
                    >
                      <IconComponent 
                        size={24} 
                        className="text-gray-400 group-hover:text-primary-purple transition-colors duration-300" 
                      />
                      <span className="font-medium group-hover:gradient-text transition-all duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-gray-300">
                We typically respond to all inquiries within 24 hours. 
                For urgent matters, feel free to reach out directly via email.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact