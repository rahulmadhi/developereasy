import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import React from 'react';
import {useEffect} from "react" ;
export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-0" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <div className="p-4 bg-indigo-600 rounded-2xl inline-block">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Master Your Future with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            {" "}Tech Excellence
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Transform your career with our comprehensive full-stack development and data analysis courses.
          Learn from industry experts and build real-world projects.
        </motion.p>
      </div>
    </motion.section>
  );
}