
const Team = () => {
  const teamMembers = [
    {
      name: 'N Saquib Lachoo',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Soumyendro',
      role: 'Clinical Advisor / Consultant',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Ankit Mathur',
      role: 'Advisor / Investor',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr Deepanshu Khatri',
      role: 'Head Operations',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr Natasha Saleem ',
      role: 'Head - Clinical Process',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            CB Physiotherapy Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-teal-600">Our Dedicated</span> & Experienced Therapist Team
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;