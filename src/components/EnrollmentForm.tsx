import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';

interface EnrollmentFormProps {
  onClose: () => void;
  selectedCourse?: string;
}

export function EnrollmentForm({ onClose, selectedCourse }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_h7k2bov', // Replace with your EmailJS service ID
        'template_e8gyojv', // Replace with your EmailJS template ID
        {
          to_email: 'rahulmernstack@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: `New enrollment request from ${formData.name} for ${formData.course} course.`,
        },
        'EXc6Mm3wpqcRf4P-T' // Replace with your EmailJS public key
      );

      toast.success('Enrollment request sent successfully!');
      onClose();
    } catch (error) {
      toast.error('Failed to send enrollment request. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Enroll Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
              Selected Course
            </label>
            <select
              id="course"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            >
              <option style={{color:"black"}} value="">Select a course</option>
              <option style={{color:"black"}} value="Java / Python Full Stack Development">Java / Python Full Stack Development</option>
              <option style={{color:"black"}} value="Machine Learning">Machine Learning</option>
              <option  style={{color:"black"}} value="Data Analyst">Data Analyst</option>
            </select>
          </div>

          <div className="flex gap-4 mt-6">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enroll
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}