import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "PHYSIOTHERAPY", path: "/physiotherapy" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT US", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-teal-900 text-teal-50 px-8 py-3 shadow-md relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-sm tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="hover:text-white cursor-pointer"
            >
              {item.label}
            </li>
          ))}
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => handleNavigate("/tamil")}
          >
            தமிழ்
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-[#D8DBB3] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-teal-900 text-center py-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4 font-semibold tracking-wide">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                className="hover:text-white cursor-pointer"
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={() => handleNavigate("/tamil")}
              className="hover:text-white cursor-pointer"
            >
              தமிழ்
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
