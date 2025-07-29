import { useEffect, useRef, useState } from "react";

const TrustBuilder = () => {
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
      className="py-32 bg-gradient-to-br from-[#41B8D5]/5 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #41B8D5 0%, transparent 40%),
                            radial-gradient(circle at 80% 80%, #41B8D5 0%, transparent 40%)`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#41B8D5]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-[#41B8D5]/15 rounded-full blur-2xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            The best automation systems
            <br />
            <span className="text-[#41B8D5]">are built side by side.</span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
            Partnership, not just service. We work alongside your team to ensure
            every automation solution perfectly fits your unique business needs.
          </p>
        </div>

        {/* Visual Elements */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-center space-x-8">
            {/* Partnership Icons */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#41B8D5]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-black">Partnership</div>
                <div className="text-gray-600 text-sm">Side by side</div>
              </div>
            </div>

            <div className="w-px h-16 bg-[#41B8D5]/30"></div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#41B8D5]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-black">Results</div>
                <div className="text-gray-600 text-sm">Delivered together</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;
