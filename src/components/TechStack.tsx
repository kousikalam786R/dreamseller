'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Server, Database, Cloud, Brain } from 'lucide-react'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Next.js', 'React Native'],
      description: 'Modern, performant frameworks for web and mobile applications'
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      technologies: ['Node.js', 'NestJS', 'Express'],
      description: 'Scalable server-side architectures built on JavaScript ecosystem'
    },
    {
      title: 'Database & Cache',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['MongoDB', 'Redis'],
      description: 'Flexible NoSQL database and high-performance caching layer'
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      technologies: ['AWS', 'Firebase', 'Docker', 'n8n'],
      description: 'Enterprise cloud infrastructure and automation tools'
    },
    {
      title: 'AI',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['OpenAI', 'Custom LLMs'],
      description: 'Advanced AI models and custom language model development'
    }
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-dark-card/20" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Modern, battle-tested technologies powering enterprise-grade solutions
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We leverage proven, scalable technologies that ensure reliability, performance, and maintainability for production applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:bg-dark-card/70 transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-200">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 text-gray-300 border border-gray-700/50`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack

