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
    title: 'Java Full Stack Development',
    description: 'Master Java, Spring Boot, React, and modern web development practices with hands-on projects.',
    icon: 'java',
    duration: '6 months',
    price: '₹49,999',
  },
  {
    title: 'Python Full Stack Development',
    description: 'Learn Python, Django, React, and build complete web applications from scratch.',
    icon: 'python',
    duration: '6 months',
    price: '₹45,999',
  },
  {
    title: 'Data Analyst',
    description: 'Become proficient in data analysis using Python, SQL, and visualization tools.',
    icon: 'data',
    duration: '4 months',
    price: '₹39,999',
  },
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