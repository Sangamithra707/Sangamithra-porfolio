import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-700 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <User size={24} />
                Professional Profile
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Detail-oriented and motivated Software Developer with over 2.5 years of experience in developing, 
                testing, and deploying scalable applications. I'm passionate about leveraging my expertise in 
                VB.Net, Java, and MSSQL to contribute to innovative projects and continuously enhance my skills 
                in collaborative development environments.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 border border-purple-500/20 rounded-2xl p-6"
            >
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-purple-400" />
                  <span>+91 6379347491</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-purple-400" />
                  <span>sangamithra707@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-purple-400" />
                  <span>Tenkasi, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-700 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-xl p-6 border border-purple-500/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="text-purple-400 font-medium mb-1">
                    Christ the King Engineering College
                  </p>
                  <p className="text-gray-400 text-sm">2018-2022 | CGPA: 8.45</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-xl p-6 border border-purple-500/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Higher Secondary Certificate
                  </h4>
                  <p className="text-purple-400 font-medium mb-1">
                    Baren Bruck Hr. Sec. School
                  </p>
                  <p className="text-gray-400 text-sm">2016-2018 | 78%</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;