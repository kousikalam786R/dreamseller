'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, Zap } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      title: 'Website Development',
      problem: 'Your business needs a professional online presence that converts visitors into customers, but generic templates don\'t reflect your brand or meet your specific requirements.',
      solution: 'We build custom websites using modern frameworks that are fast, secure, and optimized for conversions—tailored to your business goals and user experience needs.',
      projects: [
        'Corporate websites & landing pages',
        'E-commerce platforms',
        'Web applications & dashboards',
        'Progressive Web Apps (PWAs)'
      ],
      bestFor: ['Startup', 'SME', 'Enterprise'],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App Development',
      problem: 'Your customers expect mobile-first experiences, but developing native apps is complex, time-consuming, and requires ongoing maintenance across platforms.',
      solution: 'We deliver cross-platform mobile applications with native performance, ensuring seamless user experiences on iOS and Android while reducing development time and costs.',
      projects: [
        'Native iOS & Android apps',
        'Cross-platform solutions',
        'Mobile-first web apps',
        'App maintenance & updates'
      ],
      bestFor: ['Startup', 'SME', 'Enterprise'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Automation & AI Solutions',
      problem: 'Manual, repetitive tasks drain resources and limit scalability, while your business data remains underutilized for strategic decision-making.',
      solution: 'We implement intelligent automation workflows and custom AI solutions that eliminate manual work, extract insights from your data, and scale with your business.',
      projects: [
        'Process automation & workflow optimization',
        'Custom GPT models & chatbots',
        'AI-powered analytics & reporting',
        'Machine learning integration'
      ],
      bestFor: ['SME', 'Enterprise'],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
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
            Custom development and AI solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group glass-effect p-8 rounded-xl hover:bg-dark-card/70 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className={`inline-flex w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Problem Statement */}
                <div className="mb-5 flex-1">
                  <p className="text-sm font-semibold text-gray-400 mb-2">The Challenge</p>
                  <p className="text-gray-300 leading-relaxed text-sm mb-5">
                    {service.problem}
                  </p>
                  
                  {/* Solution */}
                  <p className="text-sm font-semibold text-gray-400 mb-2">Our Solution</p>
                  <p className="text-gray-300 leading-relaxed text-sm mb-5">
                    {service.solution}
                  </p>
                </div>

                {/* Types of Projects */}
                <div className="mb-5">
                  <p className="text-sm font-semibold text-gray-400 mb-3">Types of Projects</p>
                  <ul className="space-y-2">
                    {service.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-start text-sm text-gray-300">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} mr-2 font-bold`}>•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="mt-auto pt-5 border-t border-gray-700/50">
                  <p className="text-sm font-semibold text-gray-400 mb-3">Best For</p>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.map((audience, audienceIndex) => (
                      <span
                        key={audienceIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 text-gray-300 border border-gray-700/50`}
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services