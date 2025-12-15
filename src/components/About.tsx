'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const timelineItems = [
    { year: '2023', title: 'Company Founded', description: 'Started with a vision to revolutionize AI services' },
    { year: '2024', title: 'First Products', description: 'Launched SpeakVerse and MedEasy platforms' },
    { year: '2025', title: 'Expansion', description: 'Growing our product suite and automation services' },
  ]

  return (
    <section ref={ref} className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">DreamSeller</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are an innovative AI startup dedicated to building cutting-edge tools and providing 
            comprehensive automation services. Our mission is to empower businesses and individuals 
            with intelligent solutions that transform ideas into reality.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`glass-effect p-6 rounded-lg max-w-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About