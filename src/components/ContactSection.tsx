import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import React from 'react';

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto" id='contact'>
        <h2 className="text-4xl font-bold text-white text-center mb-12">For More Enquiries</h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400">Primary Contact</p>
                <a href="tel:+918553258030" className="text-xl text-white font-semibold hover:text-indigo-400 transition-colors">
                  +91 855 325 8030
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400">Secondary Contact</p>
                <a href="tel:+917204201177" className="text-xl text-white font-semibold hover:text-indigo-400 transition-colors">
                  +91 720 420 1177
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}