import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Ava Brown",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod. Ipsum dolor sit amet consectetur adipisicing elit. Quas, quod tempor erat.",
      name: "John Smith",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At lorem lorem magna ut et.",
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const sideImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop"
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-teal-900 mb-16">
          What Our Clients<br />Say!
        </h1>

        {/* Testimonial Section */}
        <div className="relative flex items-center justify-center">
          {/* Left Side Images - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col gap-8 mr-12">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src={sideImages[0]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform ml-8">
              <img 
                src={sideImages[1]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src={sideImages[2]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Testimonial Card */}
          <div className="w-full max-w-2xl">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              {/* Main Testimonial Image */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center text-base md:text-lg leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>

              {/* Name and Position */}
              <h3 className="text-2xl md:text-3xl font-bold text-teal-900 text-center mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 text-center mb-8">
                {testimonials[currentIndex].position}
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 bg-teal-700 hover:bg-teal-800 text-white rounded flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-teal-700 hover:bg-teal-800 text-white rounded flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Images - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col gap-8 ml-12">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform mr-8">
              <img 
                src={sideImages[3]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src={sideImages[4]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform mr-8">
              <img 
                src={sideImages[5]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;