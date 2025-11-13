import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About US', path: '/about' },
    {
      label: 'Service',
      path: '/service',
      submenu: [
        { label: 'Gait school', path: '/service/gait-school' },
        { label: 'Functional activity', path: '/service/functional-activity' },
        { label: 'Walking', path: '/service/walking' },
        { label: 'Instruments', path: '/service/instruments' },
        { label: 'Specialities', path: '/service/specialities' },
        { label: 'Postural correction exercise', path: '/service/postural-correction' },
        { label: 'Playing activities', path: '/service/playing-activities' },
        { label: 'Lab testing', path: '/service/lab-testing' },
      ],
    },
    { label: 'Physiotheraphy', path: '/physiotheraphy' },
    { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="bg-teal-900 px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-white p-2 rounded">
            <svg className="w-7 h-7 text-[#1a4d4d]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
              10 10 10 10-4.48 10-10S17.52 2 
              12 2zm0 3c1.66 0 3 1.34 3 
              3s-1.34 3-3 3-3-1.34-3-3 
              1.34-3 3-3zm0 14.2c-2.5 
              0-4.71-1.28-6-3.22.03-1.99 
              4-3.08 6-3.08 1.99 0 5.97 
              1.09 6 3.08-1.29 1.94-3.5 
              3.22-6 3.22z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl text-teal-50 font-bold">SIVASAKTHI</h2>
            <p className="text-sm text-teal-50">PHYSIOTHERAPY</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) =>
            item.submenu ? (
              <div
                key={item.label}
                className="relative group"
              >
                <button
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-1 text-teal-50 font-medium hover:text-teal-200 transition-colors"
                >
                  {item.label} <ChevronDown className="w-4 h-4 " />
                </button>

                {/* Submenu Dropdown */}
                <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.submenu.map((sub) => (
                    <button
                      key={sub.path}
                      onClick={() => navigate(sub.path)}
                      className="block w-full text-left px-4 py-2 hover:bg-teal-100 whitespace-nowrap"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-teal-50 hover:text-teal-200 transition-colors font-medium"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-5">
          <button
            onClick={() => navigate('/contact')}
            className="hidden md:block bg-teal-50 text-teal-900 px-6 py-2.5 rounded-full hover:bg-teal-100 transition-colors font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => navigate('/book-appointment')}
            className="hidden md:block bg-teal-50 text-teal-900 px-6 py-2.5 rounded-full hover:bg-teal-100 transition-colors font-medium"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-teal-50" />
          ) : (
            <Menu className="w-6 h-6 text-teal-50" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="flex justify-between items-center w-full text-left text-teal-50 font-medium py-2"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServiceOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isServiceOpen && (
                    <div className="pl-4">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.path}
                          onClick={() => {
                            navigate(sub.path);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left text-teal-100 hover:text-white py-2 text-sm"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-teal-50 py-2 font-medium"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}

          <button
            onClick={() => navigate('/contact')}
            className="w-full bg-teal-50 text-teal-900 px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => navigate('/book-appointment')}
            className="w-full bg-teal-50 text-teal-900 px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
