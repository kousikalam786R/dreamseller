'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Cpu, Code } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const services = [
    {
      title: 'Automation',
      description: 'Streamline your business processes with intelligent automation solutions that save time and reduce costs.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Custom GPT',
      description: 'Tailored GPT models trained specifically for your business needs and industry requirements.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom LLM',
      description: 'Large Language Models designed and optimized for your specific use cases and data requirements.',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Website & Mobile App Development',
      description: 'Full-stack development services for modern web applications and mobile apps with cutting-edge technology.',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-dark-card/20" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and development services to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-effect p-8 rounded-xl hover:bg-dark-card/70 transition-all duration-500 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${service.color} mt-6 rounded-full`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services