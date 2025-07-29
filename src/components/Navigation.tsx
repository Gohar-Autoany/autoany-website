import { useState, useEffect } from "react";
import { X } from "lucide-react";
import autoanyLogo from "@/assets/autoany-logo.svg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* MUCH LARGER autoany Logo */}
            <div className="flex items-center group cursor-pointer">
              <img
                src={autoanyLogo}
                alt="autoany logo"
                className={`transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg ${
                  isScrolled ? "h-20" : "h-24"
                } w-auto`}
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 group hover-glow-brand"
            >
              <span className="group-hover:animate-pulse">Get in Touch</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl animate-fade-in-scale border-2 border-[#41B8D5]/20">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center mb-4">
                <img
                  src={autoanyLogo}
                  alt="autoany logo"
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                Let's discuss your automation needs
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#41B8D5] focus:ring-2 focus:ring-[#41B8D5]/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#41B8D5] focus:ring-2 focus:ring-[#41B8D5]/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#41B8D5] focus:ring-2 focus:ring-[#41B8D5]/20 transition-all duration-300"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#41B8D5] focus:ring-2 focus:ring-[#41B8D5]/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your automation needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover-glow-brand"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
