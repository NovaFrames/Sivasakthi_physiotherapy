import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FaqItem[] = [
    {
      question: "What Is Precision Care For Pain-Free Mobility?",
      answer:
        "Precision Care for Pain-Free Mobility is CB Physiotherapy's technology-driven approach to physiotherapy treatment. It uses AI-powered diagnosis and personalized rehabilitation plans to deliver targeted pain relief and improve mobility. Whether you're visiting one of our advanced physiotherapy clinics, opting for home physiotherapy, or using our tele-rehabilitation services, this approach ensures effective, expert-led care tailored to your specific needs — helping you recover faster and move better.",
    },
    {
      question: "What Are The Services Offered By Cb Physiotherapy In India?",
      answer:
        "CB Physiotherapy offers a comprehensive range of services including in-clinic physiotherapy, home physiotherapy visits, tele-rehabilitation services, sports injury treatment, orthopedic rehabilitation, neurological rehabilitation, pediatric physiotherapy, geriatric care, post-surgical rehabilitation, and pain management programs.",
    },
    {
      question:
        "Do You Offer Remote Physiotherapy / Virtual Physiotherapy To Overseas Patients.",
      answer:
        "Yes, we offer virtual physiotherapy services to overseas patients through our tele-rehabilitation platform. Our licensed physiotherapists can provide consultations, treatment plans, exercise demonstrations, and progress monitoring remotely via video calls, ensuring you receive quality care regardless of your location.",
    },
    {
      question: "How Do I Book An Appointment For Clinic Or Home Physiotherapy Services?",
      answer:
        "Booking an appointment is easy! You can call our helpline, use our WhatsApp service, book through our website, or use our mobile app. Simply provide your details, select your preferred service type (clinic or home visit), choose a convenient time slot, and our team will confirm your appointment.",
    },
    {
      question: "What Conditions Do You Treat At Cb Physiotherapy?",
      answer:
        "We treat a wide range of conditions including back pain, neck pain, joint pain, sports injuries, arthritis, post-surgical rehabilitation, stroke recovery, neurological conditions, musculoskeletal disorders, chronic pain, mobility issues, and more. Our experienced physiotherapists create customized treatment plans for each condition.",
    },
    {
      question: "Are Your Physiotherapists Certified And Experienced?",
      answer:
        "Yes, all our physiotherapists are fully certified with degrees from recognized institutions and are registered with the appropriate regulatory bodies. Our team comprises experienced professionals with specialized training in various physiotherapy domains, ensuring you receive expert care for your specific condition.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">FAQ'S</h1>
          <p className="text-gray-600">
            Some frequently asked questions regarding physiotherapy / chiropractor services. For more FAQ's
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-teal-500 text-white rotate-180'
                      : 'bg-teal-500 text-white'
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
