import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  title: string;
  content: string;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sushim Dey",
      role: "User",
      rating: 5,
      title: "Great Center!",
      content:
        "Great centre and amazing doctors. More than their treatment it's their positivity that motivates you to come around soon. Thoroughly skilled and truly confident in approach. If you have an unbearable pain and low confidence, this is the right platform."
    },
    {
      id: 2,
      name: "Shruti Mitra",
      role: "Patient",
      rating: 5,
      title: "Experienced!",
      content:
        "Experienced a great treatment and recovery from a past long pain and the doctor shares a very friendly approach which eases as well as helps to get well soon. Must visit if you are facing challenges with your bones"
    },
    {
      id: 3,
      name: "Guna Karthikeyan",
      role: "Patient",
      rating: 5,
      title: "Highly Satisfied!",
      content:
        "Best ever service. Don't have experience with others but I found their Homecare physiotherapy service very good. Have to say that due to efforts put by their physiotherapist, Good and supported physiotherapy done, Highly satisfied. Highly recommended."
    },
    {
      id: 4,
      name: "John Smith",
      role: "Patient",
      rating: 5,
      title: "Amazing Experience!",
      content:
        "The level of care and attention I received was outstanding. The staff is professional, friendly, and genuinely concerned about patient wellbeing. Highly recommend their services."
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Patient",
      rating: 5,
      title: "Excellent Service!",
      content:
        "Very impressed with the treatment and the results. The doctors are knowledgeable and take time to explain everything. The facility is clean and well-maintained."
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Patient",
      rating: 5,
      title: "Top Quality Care!",
      content:
        "Outstanding medical care with a personal touch. The team goes above and beyond to ensure patient comfort and recovery. Would definitely recommend to family and friends."
    },
    {
      id: 7,
      name: "Anjali Reddy",
      role: "Patient",
      rating: 5,
      title: "Best Treatment!",
      content:
        "Received exceptional care and treatment. The doctors are highly skilled and compassionate. The entire experience from consultation to recovery was smooth and professional."
    }
  ];

  const getVisibleTestimonials = (): Testimonial[] => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className=" bg-teal-50 py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-4">
            <p className="text-teal-600 text-sm font-medium">
              Happiness On Our Patient's Faces Is What Drives Us
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What <span className="text-teal-500">Patients</span> Say About Us
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index: number) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-white rounded-2xl h-80 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating and Title */}
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i: number) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-gray-800 font-semibold text-lg">
                  {testimonial.title}
                </h3>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2">
          {testimonials.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-3 bg-teal-500'
                  : 'w-3 h-3 bg-teal-300 hover:bg-teal-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute -left-15 top-1/2 -translate-y-1/2 bg-teal-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute -right-15 top-1/2 -translate-y-1/2 bg-teal-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
