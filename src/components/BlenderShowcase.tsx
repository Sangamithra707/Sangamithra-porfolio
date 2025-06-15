import React from 'react';
import { motion } from 'framer-motion';
import { Github, Play, Cuboid as Cube, Eye } from 'lucide-react';

const BlenderShowcase = () => {
  const blenderProjects = [
    {
      title: 'Character Modeling & Rigging',
      description: 'Complex 3D character models with detailed texturing and advanced rigging systems for animation.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Detailed character modeling and sculpting',
        'Advanced rigging with IK/FK systems',
        'PBR texturing and material creation',
        'Animation-ready character rigs'
      ]
    },
    {
      title: 'Environmental Scene Creation',
      description: 'Immersive 3D environments showcasing lighting, composition, and atmospheric effects.',
      image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Detailed environmental modeling',
        'Advanced lighting setups',
        'Particle systems and effects',
        'Photorealistic rendering'
      ]
    },
    {
      title: 'Product Visualization',
      description: 'Professional product renders and animations for commercial and portfolio purposes.',
      image: 'https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Product modeling and visualization',
        'Studio lighting setups',
        'Material and texture work',
        'Commercial render quality'
      ]
    }
  ];

  return (
    <section id="blender" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Blender 3D Showcase
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my collection of 3D models, animations, and creative projects created using Blender. 
            Each project demonstrates different aspects of 3D modeling, texturing, lighting, and animation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blenderProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 border border-purple-500/20 rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye size={32} className="text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-purple-300 font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-xs flex items-start gap-2">
                        <Cube size={12} className="text-purple-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repository Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-700 border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore My 3D Work</h3>
            <p className="text-gray-300 mb-6">
              Visit my GitHub repository to see more Blender projects, including source files, 
              video demonstrations, and detailed project breakdowns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/sangamithra-m/blender-projects"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-600 justify-center"
              >
                <Github size={20} />
                View on GitHub
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-white justify-center"
              >
                <Play size={20} />
                Watch Demo Reel
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlenderShowcase;