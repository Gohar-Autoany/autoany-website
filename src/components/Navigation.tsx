import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      {/* Constrained Container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-white font-bold text-3xl tracking-tight">
              autoany<span className="text-[#41B8D5]">.io</span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white/90 hover:text-[#41B8D5] transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white/90 hover:text-[#41B8D5] transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-white/90 hover:text-[#41B8D5] transition-colors duration-200 font-medium"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-white/90 hover:text-[#41B8D5] transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-[#41B8D5] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button className="bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
