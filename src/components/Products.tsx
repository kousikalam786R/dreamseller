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
      name: 'SpeakVerse',
      summary: 'Production-grade AI-powered language learning platform that delivers personalized English speaking practice through advanced conversational AI.',
      problem: 'Traditional language learning apps lack real conversation practice, while human tutors are expensive and not always available, creating barriers to fluency.',
      features: [
        'Real-time AI conversation partner with natural language understanding',
        'Advanced pronunciation analysis and corrective feedback',
        'Personalized learning paths adapting to user progress and goals',
        'Scalable cloud infrastructure supporting millions of active users'
      ],
      techCredibility: 'Built on large language models, speech recognition APIs, and cloud-native architecture',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'MedEasy',
      summary: 'Enterprise healthcare platform enabling secure telemedicine consultations, digital health records, and end-to-end patient care management.',
      problem: 'Healthcare providers struggle with fragmented patient data, limited accessibility, and inefficient appointment management, reducing quality of care and operational efficiency.',
      features: [
        'HIPAA-compliant video consultations with integrated EMR systems',
        'Secure patient health records with encrypted data storage',
        'Automated appointment scheduling and prescription management',
        'Multi-tenant architecture supporting clinics and hospital networks'
      ],
      techCredibility: 'Compliant with healthcare regulations (HIPAA), built on secure cloud infrastructure with end-to-end encryption',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'EasyDelivery',
      summary: 'Enterprise logistics platform optimizing last-mile delivery operations through intelligent zone management, real-time tracking, and automated route optimization.',
      problem: 'Delivery businesses face rising operational costs, inefficient routing, and poor visibility into delivery status, impacting profitability and customer satisfaction.',
      features: [
        'Dynamic zone-based delivery management with intelligent assignment',
        'Real-time GPS tracking and delivery status updates',
        'AI-powered route optimization reducing fuel costs and delivery time',
        'Scalable platform handling high-volume delivery operations'
      ],
      techCredibility: 'Powered by route optimization algorithms, real-time GPS integration, and cloud-based microservices architecture',
      icon: Truck,
      color: 'from-green-500 to-emerald-500'
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
            Production-ready platforms solving critical business challenges at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-effect p-6 rounded-xl hover:bg-dark-card/70 transition-all duration-300 flex flex-col"
              >
                {/* Icon & Title */}
                <div className="mb-4">
                  <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {product.name}
                  </h3>
                </div>

                {/* Product Summary */}
                <p className="text-gray-200 font-medium mb-4 leading-relaxed text-sm">
                  {product.summary}
                </p>

                {/* Problem Statement */}
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Problem Solved</p>
                  <p className="text-gray-300 leading-relaxed text-xs mb-4">
                    {product.problem}
                  </p>
                  
                  {/* Core Features */}
                  <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Core Features</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-gray-300">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${product.color} mr-2 font-bold mt-0.5 flex-shrink-0`}>▸</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Credibility */}
                <div className="mt-auto pt-4 border-t border-gray-700/50">
                  <p className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Technology</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {product.techCredibility}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products