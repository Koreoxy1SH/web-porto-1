import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span> Skills
          <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-grow max-w-xs"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{skill.name}</h3>
                <span className="text-primary text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
