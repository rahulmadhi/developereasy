import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Book, Code2, Database } from 'lucide-react';
import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: 'java' | 'python' | 'data';
  duration: string;
  price: string;
  onEnroll: (course: string) => void;
}

const icons = {
  java: Code2,
  python: Book,
  data: Database,
};

export function CourseCard({ title, description, icon, duration, price, onEnroll }: CourseCardProps) {
  const Icon = icons[icon];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 25, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 2000,
        transformStyle: "preserve-3d"
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl cursor-pointer"
      >
        <div className="relative z-10">
          <div className="p-3 bg-indigo-600 rounded-lg inline-block mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">{duration}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEnroll(title)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              {price}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}