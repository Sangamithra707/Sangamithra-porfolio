import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-800 pt-20 pb-8">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-purple-400"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-purple-400">
              Sangamithra M
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Building innovative solutions with passion and precision. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/sangamithra-m"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-3 rounded-full border border-purple-500/20 hover:border-purple-400 transition-colors duration-300"
            >
              <Github size={20} className="text-purple-400" />
            </motion.a>
            <motion.a
              href="mailto:sangamithra707@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-3 rounded-full border border-purple-500/20 hover:border-purple-400 transition-colors duration-300"
            >
              <Mail size={20} className="text-purple-400" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-gray-400 mb-8"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-400 mx-2 animate-pulse" />
            <span>using React.js, Three.js & Express.js</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-purple-500/20 pt-8 flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="text-gray-500 text-sm">
              © 2024 Sangamithra M. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 sm:mt-0 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
              <ArrowUp size={16} className="text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;