'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MessageCircle, Mail, ArrowRight } from 'lucide-react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={ref} className="py-20 px-6" id="cta">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your Business?
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss how our solutions can drive real results for your organization. No obligation, just an honest conversation about your needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-300 flex items-center gap-3 text-base md:text-lg"
            >
              <Calendar size={20} />
              <span>Book a Free Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-dark-card/70 transition-all duration-300 flex items-center gap-3 text-base md:text-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="mailto:contact@dreamseller.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-dark-card/70 transition-all duration-300 flex items-center gap-3 text-base md:text-lg"
              >
                <Mail size={20} />
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400"
          >
            We respond within 24 hours • No spam, ever • Confidential consultation
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

