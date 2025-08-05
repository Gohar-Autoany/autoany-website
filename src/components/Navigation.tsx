// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/text logo main.png";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for custom events from other components
  useEffect(() => {
    const handleOpenContactForm = () => {
      console.log("Received openContactForm event!");
      setIsContactFormOpen(true);
    };

    window.addEventListener("openContactForm", handleOpenContactForm);

    return () => {
      window.removeEventListener("openContactForm", handleOpenContactForm);
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openForm = () => {
    console.log("Opening contact form!");
    setIsContactFormOpen(true);
  };

  const closeForm = () => {
    console.log("Closing contact form!");
    setIsContactFormOpen(false);
    setSubmitStatus("idle");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace 'yourdomain.com' with your actual domain
      const response = await fetch("https://yourdomain.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          closeForm();
        }, 2000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="font-['Glacial_Indifference',_'Inter',_sans-serif]">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-md"
              : "bg-transparent backdrop-blur-sm"
          }`}
        >
          <div className="w-full px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo - Far Left */}
              <a href="#" className="flex items-center">
                <img
                  src={logo}
                  alt="Autoany Logo"
                  className="h-8 w-auto object-contain"
                />
              </a>

              {/* Desktop Navigation - Center */}
              <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => handleSmoothScroll("process")}
                  className="text-black hover:text-[#41B8D5] font-medium text-sm cursor-pointer px-3 py-2"
                >
                  Process
                </button>
                <button
                  onClick={() => handleSmoothScroll("services")}
                  className="text-black hover:text-[#41B8D5] font-medium text-sm cursor-pointer px-3 py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => handleSmoothScroll("results")}
                  className="text-black hover:text-[#41B8D5] font-medium text-sm cursor-pointer px-3 py-2"
                >
                  Results
                </button>
                <button
                  onClick={() => handleSmoothScroll("why-autoany")}
                  className="text-black hover:text-[#41B8D5] font-medium text-sm cursor-pointer px-3 py-2"
                >
                  Why Autoany?
                </button>
              </div>

              {/* CTA Button - Far Right */}
              <div className="hidden md:block">
                <Button
                  onClick={openForm}
                  className="bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 text-xs"
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black p-1.5"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-3 space-y-3 pb-4 px-6">
                <button
                  onClick={() => handleSmoothScroll("process")}
                  className="block text-black font-medium hover:text-[#41B8D5] text-xs w-full text-left"
                >
                  Process
                </button>
                <button
                  onClick={() => handleSmoothScroll("services")}
                  className="block text-black font-medium hover:text-[#41B8D5] text-xs w-full text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => handleSmoothScroll("results")}
                  className="block text-black font-medium hover:text-[#41B8D5] text-xs w-full text-left"
                >
                  Results
                </button>
                <button
                  onClick={() => handleSmoothScroll("why-autoany")}
                  className="block text-black font-medium hover:text-[#41B8D5] text-xs w-full text-left"
                >
                  Why Autoany?
                </button>
                <div>
                  <Button
                    onClick={openForm}
                    className="w-full mt-3 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-xs"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeForm}
          />

          {/* Contact Form */}
          <div className="fixed right-0 top-0 h-full w-full md:w-2/5 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-8">
              <button
                onClick={closeForm}
                className="float-right text-2xl hover:text-[#41B8D5] transition-colors"
                aria-label="Close"
              >
                ×
              </button>

              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-2 text-black">
                  Get Started Today
                </h2>
                <p className="text-gray-600 mb-6">
                  Transform your business with intelligent automation. Let's
                  discuss your needs.
                </p>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <strong>Success!</strong> Your message has been sent. We'll
                    get back to you within 24 hours.
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <strong>Error!</strong> Failed to send message. Please try
                    again or email us directly at hello@autoany.io
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41B8D5] focus:border-transparent transition-all"
                      placeholder="John Smith"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41B8D5] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41B8D5] focus:border-transparent transition-all"
                      placeholder="Your Company"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41B8D5] focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What would you like to automate?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41B8D5] focus:border-transparent transition-all resize-none"
                      placeholder="Describe your current processes and what you'd like to automate..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#41B8D5] hover:bg-[#41B8D5]/90 hover:scale-105 hover:shadow-lg"
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Get My Free Automation Audit"
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Free consultation • No obligation • Response within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
