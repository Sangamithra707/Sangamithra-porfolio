import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Billing System',
      description: 'A comprehensive desktop-based billing application for small businesses to handle customer transactions, product billing, and invoice generation.',
      technologies: ['VB.NET', 'MS SQL Server', 'Crystal Reports'],
      features: [
        'User-friendly interfaces for product entry and customer management',
        'MS SQL Server backend with relational database design',
        'Real-time GST calculation and auto-generated invoices',
        'CRUD operations with optimized performance',
        'Reduced manual billing errors by over 60%'
      ],
      type: 'Desktop Application'
    },
    {
      title: 'Bill Print Application',
      description: 'A Java-based desktop application for generating and printing customer bills with advanced features and database integration.',
      technologies: ['Java Swing', 'MS SQL Server', 'JDBC'],
      features: [
        'Intuitive GUI using Java Swing for data entry',
        'Real-time database connectivity via JDBC',
        'PDF generation and direct printing support',
        'Dynamic tax calculation (GST/VAT) with discount management',
        'Streamlined billing operations for businesses'
      ],
      type: 'Desktop Application'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-purple-500/20 rounded-3xl overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3 space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Code size={24} className="text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                        {project.type}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-purple-300">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-1/3 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;