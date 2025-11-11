import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a4d4d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded">
                <svg className="w-8 h-8 text-[#1a4d4d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">CB | <span className="font-normal">PHYSIO</span></h2>
                <p className="text-sm">THERAPY</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              New-age physio care delivering high-quality personalized treatments by seamlessly integrating clinic, home & tele-rehab.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* More Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">More Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Contact</h3>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:help@cbphysiotherapy.in" className="text-white hover:text-gray-300 transition-colors">
                help@cbphysiotherapy.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300">
            Copyright 2025 Curebooth Healthcare Services Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Terms And Conditions
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              FAQ
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;