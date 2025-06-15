import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'Jilaba Software',
      period: 'MAY 2022 - NOV 2024',
      responsibilities: [
        'Assisted in developing and maintaining desktop applications',
        'Managed and maintained MSSQL databases, ensuring high availability, security, and performance tuning',
        'Integrated VB.NET applications with MSSQL databases',
        'Debugged and optimized legacy VB.NET applications, improving performance and stability',
        'Designed and implemented Java-based applications, integrating with MSSQL databases for data processing'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-400"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"></div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="ml-16 bg-gray-800 border border-purple-500/20 rounded-2xl p-8 mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <Briefcase size={24} className="text-purple-400" />
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 text-xl font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Responsibilities:</h4>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <ChevronRight 
                        size={16} 
                        className="text-purple-400 mt-1 transition-transform group-hover:translate-x-1" 
                      />
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;