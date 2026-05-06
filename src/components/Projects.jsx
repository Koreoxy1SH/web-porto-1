import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span> Projects
          <div className="h-[1px] bg-gray-200 dark:bg-gray-800 flex-grow max-w-xs"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group flex flex-col h-full"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.link} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted text-sm mb-6 flex-grow">{project.description}</p>
              <div className="flex gap-2">
                <span className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Tailwind</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
