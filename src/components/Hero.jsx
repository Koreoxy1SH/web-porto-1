import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const Hero = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center pt-32">
      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4"
        >
          {profile.name}.
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold text-muted mb-8"
        >
          I build things for the web.
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted max-w-2xl mb-12"
        >
          {profile.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
