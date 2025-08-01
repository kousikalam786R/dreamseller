'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Heart, Truck } from 'lucide-react'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const products = [
    {
      name: 'MrEnglish',
      description: 'AI-powered English speaking app that helps users improve their conversation skills with personalized lessons and real-time feedback.',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      features: ['AI Conversation Partner', 'Pronunciation Analysis', 'Personalized Learning']
    },
    {
      name: 'MedEasy',
      description: 'Healthcare consultation platform connecting patients with medical professionals through secure, convenient digital consultations.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      features: ['Secure Consultations', 'Medical Records', 'Prescription Management']
    },
    {
      name: 'EasyDelivery',
      description: 'Zone-based delivery and booking platform optimizing logistics for businesses and providing seamless customer experiences.',
      icon: Truck,
      color: 'from-green-500 to-emerald-500',
      features: ['Zone Management', 'Real-time Tracking', 'Smart Routing']
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6" id="products">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions designed to solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group glass-effect p-8 rounded-xl hover:bg-dark-card/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full py-3 bg-gradient-to-r ${product.color} text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products