import React from 'react';

const WhyChooseUs = () => {
  const stats = [
    { label: 'Professional Team', percentage: 97 },
    { label: 'Comprehensive Services', percentage: 90 },
    { label: 'Affordable Package', percentage: 88 },
    { label: 'Satisfied Client', percentage: 95 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-gray-50 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-sm font-semibold text-teal-900 tracking-wider uppercase mb-2">
                WHY CHOOSE US
              </p>
              <div className="w-30 h-0.5 bg-teal-900 mb-6"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-6 leading-tight">
              Individually Tailored Treatment:<br />
              Your Path to Wellness
            </h2>

            <p className="text-gray-600 mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* Statistics Bars */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-bold">{stat.label}</span>
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{stat.percentage}%</span>
                      </div>
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
          

          {/* Right Side - Content */}
          <div className="relative h-full min-h-[400px] md:min-h-[600px]">
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