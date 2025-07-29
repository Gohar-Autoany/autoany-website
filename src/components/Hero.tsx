import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Clean Dark Background with Brand Colors */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      />

      {/* Subtle Background Pattern with Brand Teal */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #41B8D5 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #41B8D5 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Floating Brand Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#41B8D5]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[#41B8D5]/15 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#41B8D5]/10 rounded-full blur-xl animate-float animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Pre-header with Brand Colors */}
          <div className="inline-flex items-center px-4 py-2 bg-[#41B8D5]/20 backdrop-blur-sm rounded-full text-[#41B8D5] font-medium mb-8 border border-[#41B8D5]/30">
            We don't just build AI tools.
          </div>

          {/* Main Message */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-8">
            We transform
            <br />
            <span
              className="bg-gradient-to-r from-[#41B8D5] to-[#41B8D5]/70 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 4s ease infinite",
              }}
            >
              entire businesses.
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl font-light text-white/90 mb-8">
            Automate everything. Achieve anything.
          </h2>

          {/* Partnership Statement */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            One trusted partner to guide you through your entire automation
            journey.
          </p>
        </div>
      </div>

      {/* Scroll Indicator with Brand Colors */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#41B8D5]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#41B8D5] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
