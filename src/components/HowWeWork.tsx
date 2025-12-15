'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Palette, Code, TestTube, Rocket, TrendingUp } from 'lucide-react'

const HowWeWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      number: '01',
      title: 'Requirement & Discovery',
      explanation: 'We conduct in-depth stakeholder interviews and technical analysis to understand your business objectives, user needs, and technical constraints.',
      benefit: 'Clear project scope and requirements prevent scope creep and ensure alignment from day one.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'UI/UX Planning',
      explanation: 'Our design team creates user journeys, wireframes, and high-fidelity prototypes validated through user testing and stakeholder feedback.',
      benefit: 'Well-planned user experiences reduce development rework and increase user adoption rates.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Development',
      explanation: 'We build using modern tech stacks, following agile methodologies with regular sprint reviews and transparent progress reporting.',
      benefit: 'Incremental delivery enables early feedback and faster time-to-market for core features.',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      number: '04',
      title: 'Testing & QA',
      explanation: 'Comprehensive testing including unit tests, integration tests, security audits, and performance optimization ensures production readiness.',
      benefit: 'Thorough quality assurance minimizes bugs, security vulnerabilities, and costly post-launch fixes.',
      icon: TestTube,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '05',
      title: 'Deployment',
      explanation: 'We handle infrastructure setup, CI/CD pipeline configuration, and staged rollout to production with zero-downtime deployment strategies.',
      benefit: 'Smooth launches with minimal disruption and automated rollback capabilities protect your business operations.',
      icon: Rocket,
      color: 'from-red-500 to-pink-500'
    },
    {
      number: '06',
      title: 'Support & Scaling',
      explanation: 'Ongoing maintenance, performance monitoring, feature enhancements, and infrastructure scaling as your business grows.',
      benefit: 'Continuous optimization and support ensure your platform remains reliable, fast, and aligned with evolving business needs.',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven process that delivers results on time and within budget
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs font-bold text-gray-500">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-effect p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-200">
                    {step.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide text-xs">Process</p>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {step.explanation}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-700/50">
                      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide text-xs">Your Benefit</p>
                      <p className="text-gray-300 leading-relaxed text-sm font-medium">
                        {step.benefit}
                      </p>
                    </div>
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

export default HowWeWork

