import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle resume download
  const handleResumeDownload = () => {
    // Option 1: Direct download from public folder
    const link = document.createElement('a');
    link.href = 'public/uploads/OussamaCVEnglish.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Oussama_Ouali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Add analytics tracking
    // gtag('event', 'download', { file_name: 'resume' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-md py-2 shadow-md"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold font-playfair text-gradient relative group"
          >
            Oussama Ouali
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-sky-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link font-poppins text-sm font-medium ${isActive ? "active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              size="sm"
              className="ml-4 gap-2 bg-gradient-to-r from-purple-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 font-poppins"
              onClick={handleResumeDownload}
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-purple-400 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-md transition-colors font-poppins flex items-center justify-between ${isActive
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-foreground hover:bg-purple-500/5 hover:text-purple-400"
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="opacity-70" />
                </NavLink>
              ))}
              <Button
                size="sm"
                className="w-full gap-2 mt-2 bg-gradient-to-r from-purple-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 font-poppins"
                onClick={handleResumeDownload}
              >
                <Download size={16} />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}