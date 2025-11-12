import { Award } from "lucide-react";

const ServiceHome = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Physiotherapy session"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
              <div className="bg-teal-50 p-3 rounded-xl">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Of Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">

            {/* Heading */}
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              We Are The Best For{" "}
              <span className="text-teal-600">Physiotherapy</span>
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                CB Physiotherapy is India's fastest growing Delivery Network for Physiotherapy & 
                Chiropractors services. At CB Physiotherapy, we are committed to increase access 
                to quality physio care through ultra-modern clinics and high-skilled practitioners. 
                Our integrated / multi-therapy approach helps keep a strong focus on patient 
                needs and deliver the highest level of patient centric care with better outcomes
              </p>

              <p>
                We serve a wide range of patients offering treatment at clinic as well as at the 
                comfort of their homes. We make sure that our clinics are not only equipped with 
                the latest equipment's but also provide clean, energetic and uplifting atmospheres 
                for better healing. For Home Care, our well-established processes ensure delivery 
                of high-quality treatment with superior patient service.
              </p>

              <p>
                Rather than transactional engagement with patients, we are committed to partner 
                with our patients in their journey of healing
              </p>

              <p>
                We work with you through your healing from start to finish providing a robust 
                program involving combination of multiple therapies / modalities. Also, after 
                treatment is over, we provide support / guidance to prevent injury from repeating / 
                pain from returning. The happiness on our patient's faces is what keeps us going.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;