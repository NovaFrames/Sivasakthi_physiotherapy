import { Building2, Home as HomeIcon, Monitor } from "lucide-react";
import Testimonials from "../Components/Testimonals";
import Team from "../Components/Team";
import Faq from "../Components/Faq";

const Home = () => {
    const services = [
        {
            title: "Who We Are?",
            description:
                "The Sivasakthi Physiotherapy Hospital & Sivasakthi Institute of Paramedical Sciences was started in 1999.",
            icon: <Building2 className="w-8 h-8 text-teal-200" />,
        },
        {
            title: "What We Do?",
            description:
                "The hospital is supports by 24 hrs nursing staff to take care of all we needs of the patient.",
            icon: <HomeIcon className="w-8 h-8 text-teal-200" />,
        },
        {
            title: "Our Facilities",
            description:
                "Siva Sakthi Physiotherapy Hospital is committed to provide standard Physiotherapy treatments and care",
            icon: <Monitor className="w-8 h-8 text-teal-200" />,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 max-w-4xl">
                        Welcome to Sivasakthi Physiotherapy Hospital
                    </h1>

                    <p className="text-lg md:text-xl text-center mb-10 max-w-3xl leading-relaxed">
                        At <span className="font-semibold text-teal-200">Sivasakthi Physiotherapy Hospital</span>,
                        we are dedicated to helping patients regain strength, mobility, and confidence
                        through expert care and personalized rehabilitation programs. Our mission is simple <br />
                        <span className="italic text-teal-100">“Doctors add years to a patient’s life,
                            physiotherapists add life to those years.”</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                            Request Callback
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                            Book Appointment
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-teal-900 py-8 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-teal-50 backdrop-blur-sm p-8 rounded-lg  border border-teal-700/50"
                        >
                            <div className="bg-teal-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-teal-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-teal-800 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Testimonials/>
            <Team/>
            <Faq/>
        </div>
    );
};

export default Home;
