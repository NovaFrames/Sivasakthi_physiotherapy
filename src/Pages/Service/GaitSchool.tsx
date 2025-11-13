import {
    Footprints,
    Target,
    Award,
    Clock,
    Calendar,
    CheckCircle,
} from 'lucide-react';

const GaitSchool = () => {
    const programs = [
        {
            icon: <Footprints className="w-8 h-8" />,
            title: "Basic Gait Analysis",
            description: "Comprehensive assessment of your walking pattern and identification of abnormalities",
            duration: "4 weeks",
            sessions: "8 sessions"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Advanced Gait Correction",
            description: "Targeted interventions to correct specific gait deviations and improve efficiency",
            duration: "6 weeks",
            sessions: "12 sessions"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Sports Performance Gait",
            description: "Optimize your running and athletic performance through gait enhancement",
            duration: "8 weeks",
            sessions: "16 sessions"
        }
    ];

    const benefits = [
        "Improved walking efficiency",
        "Reduced risk of injuries",
        "Enhanced athletic performance",
        "Better posture and balance",
        "Reduced joint pain",
        "Increased mobility and confidence"
    ];


    return (
        <div>
            {/* Hero Section */}
            <section className="relative text-teal-900 py-40 flex items-center">
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
                        alt="Physiotherapy background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">
                            Gait School
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-white">
                            Master the art of walking. Transform your mobility, reduce pain, and enhance your movement quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 px-30 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-teal-900 mb-6">
                                What is Gait School?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our Gait School is a specialized program designed to analyze, correct, and optimize
                                your walking pattern. Using state-of-the-art technology and evidence-based techniques,
                                we help you achieve efficient, pain-free movement.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Whether you're recovering from an injury, looking to improve athletic performance,
                                or simply want to walk with better form, our expert physiotherapists will guide you
                                every step of the way.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <CheckCircle className="w-6 h-6 text-teal-700 mr-2" />
                                    <span className="text-gray-700">Personalized Assessment</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-6 h-6 text-teal-700 mr-2" />
                                    <span className="text-gray-700">Expert Guidance</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-6 h-6 text-teal-700 mr-2" />
                                    <span className="text-gray-700">Proven Results</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-6 h-6 text-teal-700 mr-2" />
                                    <span className="text-gray-700">Ongoing Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://media.istockphoto.com/id/622810048/photo/female-physical-therapist-helping-young-girl-walk-up-an-incline.webp?a=1&b=1&s=612x612&w=0&k=20&c=aHCM3PEKeqagmep5R9Zgk-pBByiFSkCQTVk9FUf5yug="
                                alt="Gait Analysis in progress"
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-16 bg-teal-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Our Gait Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose from our specialized programs designed to meet your specific needs and goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 px-30">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-white rounded-2xl transition duration-300 overflow-hidden">
                                <div className="p-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {program.description}
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-gray-600">
                                            <Clock className="w-5 h-5 mr-3 text-teal-700" />
                                            <span>Duration: {program.duration}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="w-5 h-5 mr-3 text-teal-700" />
                                            <span>{program.sessions}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-teal-800 text-white py-3 rounded-xl font-semibold hover:bg-teal-900 transition duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white px-30">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Benefits of Gait Training
                            </h2>
                            <div className="grid gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center p-2 rounded-xl">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                                        <span className="text-lg text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1710467003443-4dcf21bf58fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpb3RoZXJhcHklMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
                                alt="Gait Analysis in progress"
                                className="rounded-2xl shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-teal-900 text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">95%</div>
                                    <div className="text-blue-100">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GaitSchool;