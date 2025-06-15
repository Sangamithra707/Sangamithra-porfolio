import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: [
        { name: 'VB.NET', level: 90 },
        { name: 'Java (Swing)', level: 85 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Backend',
      skills: [
        { name: 'MS SQL Server', level: 90 },
        { name: 'Stored Procedures', level: 85 },
        { name: 'Query Optimization', level: 80 },
        { name: 'Database Design', level: 85 }
      ]
    },
    {
      icon: <Settings size={24} />,
      title: 'Development Tools',
      skills: [
        { name: 'Visual Studio', level: 90 },
        { name: 'SQL Server Management Studio', level: 85 },
        { name: 'Crystal Reports', level: 80 },
        { name: 'Git Version Control', level: 75 }
      ]
    },
    {
      icon: <Globe size={24} />,
      title: 'Web & 3D Design',
      skills: [
        { name: 'React.js', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'Blender 3D', level: 80 },
        { name: 'Three.js', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="text-purple-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-purple-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;