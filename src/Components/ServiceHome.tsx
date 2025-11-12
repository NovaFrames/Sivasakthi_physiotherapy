import { Building2, Home as HomeIcon, Monitor } from "lucide-react";

const ServiceHome = () => {
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
    <div>
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
    </div>
  )
}

export default ServiceHome