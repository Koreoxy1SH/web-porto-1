import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../data'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span> Experience
          <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-grow max-w-xs"></div>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <div className="mb-1 flex flex-wrap items-center gap-x-4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-primary font-mono text-sm">@ {exp.company}</span>
              </div>
              <p className="text-sm text-muted mb-4">{exp.period}</p>
              <p className="text-muted leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
