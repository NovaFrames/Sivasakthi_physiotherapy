import { 
  Footprints, 
  Activity, 
  Users, 
  PlayCircle,
  Target,
  Heart,
  Shield,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  Zap,
  Star
} from 'lucide-react';

const Walking = () => {
  const walkingActivities = [
    {
      title: "PARALLEL BAR WALKING",
      icon: <Activity className="w-6 h-6" />,
      items: [
        "Side Walking",
        "Backward Walking",
        "Double Support Walking",
        "Tandem Walking"
      ],
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300",
      iconColor: "text-blue-600",
      bgIcon: "bg-blue-100"
    },
    {
      title: "WALKER SUPPORT WALKING",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Long Step Walking",
        "High Step Walking",
        "Arm Swing Walking Spinal Ext",
        "Head Tilt Walking"
      ],
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-300",
      iconColor: "text-emerald-600",
      bgIcon: "bg-emerald-100"
    },
    {
      title: "CRUTCH SUPPORT WALKING",
      icon: <Footprints className="w-6 h-6" />,
      items: [
        "Distinct Walking",
        "Sensory Ball Walking",
        "Swalling"
      ],
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300",
      iconColor: "text-purple-600",
      bgIcon: "bg-purple-100"
    },
    {
      title: "MANUAL SUPPORT WALKING",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Gig & Jag Walking",
        "Static Running",
        "Static Jagling"
      ],
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300",
      iconColor: "text-orange-600",
      bgIcon: "bg-orange-100"
    }
  ];

  const playingActivities = [
    {
      category: "UPPER LIMB",
      items: ["Ball Throwing", "Catching", "Rolling"],
      icon: <Target className="w-5 h-5" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      category: "LOWER LIMB", 
      items: ["Kicking", "Side Kicking"],
      icon: <Footprints className="w-5 h-5" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      category: "SWISS BALL ROLLING",
      items: ["Roller", "Twister", "Ring Ball", "Sensor Ball Cat"],
      icon: <Activity className="w-5 h-5" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "COORDINATION",
      items: ["Gig & Jag Walking", "Static Running", "Static Jagling"],
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const stats = [
    { label: "Active Sessions", value: "156", icon: <PlayCircle className="w-6 h-6" />, color: "text-blue-600" },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600" },
    { label: "Avg. Duration", value: "45min", icon: <Clock className="w-6 h-6" />, color: "text-purple-600" },
    { label: "Patient Rating", value: "4.8", icon: <Star className="w-6 h-6" />, color: "text-amber-600" }
  ];

  const benefits = [
    {
      title: "Improved Balance",
      description: "Enhanced stability and coordination through progressive exercises that build confidence and reduce fall risk",
      icon: <Target className="w-10 h-10 text-white" />,
      gradient: "from-blue-400 to-blue-600",
      borderColor: "border-blue-100"
    },
    {
      title: "Strength Building",
      description: "Develop muscle strength and endurance safely with targeted exercises for functional independence",
      icon: <Activity className="w-10 h-10 text-white" />,
      gradient: "from-green-400 to-green-600",
      borderColor: "border-green-100"
    },
    {
      title: "Mobility Enhancement",
      description: "Restore functional movement patterns and improve gait quality for daily activities",
      icon: <Footprints className="w-10 h-10 text-white" />,
      gradient: "from-purple-400 to-purple-600",
      borderColor: "border-purple-100"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-teal-900">
              <div className="inline-flex items-center rounded-full px-4 py-2 mb-6">
                <span className="text-sm  font-semibold">Professional Physiotherapy Care</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Therapeutic Walking<br />
                <span className="text-teal-900">Activities Program</span>
              </h1>
              <p className="text-xl text-teal-900 mb-8 leading-relaxed">
                Evidence-based rehabilitation programs designed to improve mobility, 
                strength, and coordination through progressive supported walking techniques.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-teal-50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <div className={`${stat.color} mb-2 flex justify-center`}>
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Walking Activities Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <Footprints className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Progressive Training</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supported Walking Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured exercises using different support systems to enhance stability, build confidence, and improve mobility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {walkingActivities.map((activity, index) => (
            <div
              key={index}
              className={`border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${activity.color} group`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${activity.bgIcon} ${activity.iconColor} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {activity.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700 bg-white/60 backdrop-blur-sm rounded-xl p-3 hover:bg-white transition-all duration-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Playing Activities Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4">
            <Activity className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Interactive Training</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Playing Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fun and engaging activities to improve coordination, motor skills, and patient engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {playingActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {activity.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                {activity.category}
              </h3>
              <ul className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 py-3 px-4 bg-gradient-to-r from-gray-50 to-transparent rounded-xl shadow-sm hover:shadow-md transition-all duration-300 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Evidence-Based Results</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Therapeutic Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive rehabilitation outcomes backed by clinical research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${benefit.borderColor}`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Walking;