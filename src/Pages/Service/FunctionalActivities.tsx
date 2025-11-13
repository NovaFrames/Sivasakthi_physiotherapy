import { useState } from 'react';
import { Activity, Target, Heart, Zap, Award, X } from 'lucide-react';

interface ActivityType {
    id: number;
    title: string;
    description: string;
    image: string;
}

const FunctionalActivities = () => {
    const [selectedImage, setSelectedImage] = useState<ActivityType | null>(null);

    const activities: ActivityType[] = [
        {
            id: 1,
            title: "Balance Training",
            description: "Improve stability and prevent falls through targeted exercises",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Strength Building",
            description: "Progressive resistance training for functional movement",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Mobility Exercises",
            description: "Enhance range of motion and flexibility for daily activities",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Gait Training",
            description: "Restore normal walking patterns and improve coordination",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
        },
        {
            id: 5,
            title: "Core Stabilization",
            description: "Strengthen your core for better posture and movement control",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop"
        },
        {
            id: 6,
            title: "Sport-Specific Training",
            description: "Return to your favorite activities with confidence",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
        }
    ];

    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Personalized Goals",
            description: "Custom treatment plans tailored to your specific needs"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Holistic Approach",
            description: "Address the root cause, not just symptoms"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Faster Recovery",
            description: "Evidence-based techniques for optimal results"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Expert Care",
            description: "Licensed professionals with years of experience"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div
                className="relative text-white py-40 px-4 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/2157936561/photo/female-nurse-with-young-patient-in-childrens-hospital-waiting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=g4CxVizBo_ocCCVZ3D1lBsdxNjxFnjsBQS-lEIVL4Z8=')",
                }}
            >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto text-center">
                    <Activity className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Functional Activities</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Regain independence and improve your quality of life through targeted functional training
                    </p>
                </div>
            </div>


            {/* Introduction Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        What Are Functional Activities?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Functional activities focus on exercises and movements that directly relate to your daily life.
                        Our approach helps you regain strength, mobility, and confidence to perform everyday tasks with ease.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg">
                            <div className="text-blue-600 mb-3">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Activities Gallery */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        Our Functional Training Programs
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-white rounded-lg overflow-hidden transition-shadow cursor-pointer"
                                onClick={() => setSelectedImage(activity)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                                    <p className="text-gray-600">{activity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-gray-800" />
                        </button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-600">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FunctionalActivities;