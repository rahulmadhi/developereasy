import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CourseCard } from './components/CourseCard';
import { ContactSection } from './components/ContactSection';
import { EnrollmentForm } from './components/EnrollmentForm';
import { Toaster } from 'react-hot-toast';

const courses = [
  {
    title: 'Java / Python Full Stack Development',
    description: 'Lean Java / Python with  Html, Css, Javascript, Advance Javascript, React Js and Mysql.',
    icon: 'java',
    duration: '3 months',
    price: 'Click here to register',
  },
  {
    title: 'Data Analyst',
    description: 'Learn and Become proficient in data analysis using Python, Mysql, Advance Excel, VBA and PowerBi.',
    icon: 'data',
    duration: '3 months',
    price: 'Click here to register',
  },
  {
    title: 'Machine Learning',
    description: 'Learn Python, Mysql, Advance Excel, VBA , PowerBi and Machinelearning',
    icon: 'python',
    duration: '4 months',
    price: 'Click here to register',
  }
 
 
] as const;

function App() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>();

  const handleEnroll = (course: string) => {
    setSelectedCourse(course);
    setShowEnrollForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5" />
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30" />
      
      <Navbar onEnroll={() => setShowEnrollForm(true)} />
      <Hero />
      <Features />

      <section id="courses" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard 
                key={course.title} 
                {...course} 
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      
      {showEnrollForm && (
        <EnrollmentForm 
          onClose={() => setShowEnrollForm(false)}
          selectedCourse={selectedCourse}
        />
      )}
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;