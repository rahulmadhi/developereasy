import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Video, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Expert Curriculum',
    description: 'Comprehensive learning paths designed by industry experts'
  },
  {
    icon: Video,
    title: 'Live Sessions',
    description: 'Interactive live classes with real-time doubt clearing'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a thriving community of fellow learners'
  },
  {
    icon: GraduationCap,
    title: 'Certification',
    description: 'Industry-recognized certificates upon completion'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <feature.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}