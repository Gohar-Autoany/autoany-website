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
      className="py-32 bg-gradient-to-br from-[#41B8D5]/5 via-white to-[#41B8D5]/5 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(65, 184, 213, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(65, 184, 213, 0.08) 0%, transparent 40%)
          `,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#41B8D5]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-[#41B8D5]/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-8">
            The best automation systems
            <br />
            <span className="text-[#41B8D5]">are built side by side.</span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Partnership, not just service. We work alongside your team to ensure
            every automation solution perfectly fits your unique business needs.
          </p>
        </div>

        {/* Visual Elements */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Partnership Icons */}
            <div className="flex items-center space-x-6 bg-white rounded-2xl p-8 shadow-lg border border-[#41B8D5]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-[#41B8D5]/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl text-black">Partnership</div>
                <div className="text-gray-600">Side by side collaboration</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-[#41B8D5]/30"></div>

            <div className="flex items-center space-x-6 bg-white rounded-2xl p-8 shadow-lg border border-[#41B8D5]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-[#41B8D5]/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-xl text-black">Results</div>
                <div className="text-gray-600">Delivered together</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#41B8D5]/20 inline-block shadow-lg">
            <p className="text-lg text-gray-700 italic">
              "Every successful automation starts with understanding your
              business"
            </p>
            <div className="mt-2 text-sm text-[#41B8D5] font-semibold">
              — autoany team philosophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilder;
