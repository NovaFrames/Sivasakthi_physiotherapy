import React from 'react';

const WhyChooseUs = () => {
  const stats = [
    { label: 'Professional Team', percentage: 97 },
    { label: 'Comprehensive Services', percentage: 90 },
    { label: 'Affordable Package', percentage: 88 },
    { label: 'Satisfied Client', percentage: 95 },
  ];

  return (
    <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center p-6 md:p-8">
      <div className="max-w-6xl w-full bg-gray-50  overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Text */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="mb-3">
              <p className="text-xs md:text-sm font-semibold text-teal-900 tracking-wider uppercase mb-2">
                WHY CHOOSE US
              </p>
              <div className="w-20 h-0.5 bg-teal-900 mb-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 leading-snug">
              Individually Tailored Treatment:
              <br />
              Your Path to Wellness
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* Statistics Bars */}
            <div className="space-y-5">
              {stats.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium text-sm md:text-base">{stat.label}</span>
                    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">{stat.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop"
              alt="Healthcare Professional"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
