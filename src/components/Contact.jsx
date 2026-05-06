import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import { Mail } from 'lucide-react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="section-padding flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-2xl"
      >
        <p className="text-primary font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Get In Touch</h2>
        <p className="text-muted mb-12">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href={`mailto:${profile.email}`} 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Say Hello
          </a>
          
          <div className="flex gap-6 text-muted">
            <a href="#" className="hover:text-primary transition-colors"><FiGithub size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FiLinkedin size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FiTwitter size={24} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
