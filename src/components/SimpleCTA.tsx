import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const SimpleCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-autoany"
      className="py-32 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#41B8D5]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#41B8D5]/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#41B8D5]/10 rounded-full blur-xl animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        {/* Main Question */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-12 leading-tight">
            Ready to transform
            <br />
            <span className="text-[#41B8D5]">your business?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join 150+ businesses that have already transformed their operations.
            Your automation journey starts with a single conversation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group px-8 py-4 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-2xl text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#41B8D5]/25 flex items-center justify-center">
            <span className="mr-2">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-[#41B8D5]/5 via-white to-[#41B8D5]/5 rounded-2xl p-6 border border-[#41B8D5]/20 inline-block shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse"></div>
                <span>&lt; 24h Response Time</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse animation-delay-500"></div>
                <span>150+ Businesses Served</span>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse animation-delay-1000"></div>
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-gray-600 italic">
            "The best automation systems are built side by side"
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTA;