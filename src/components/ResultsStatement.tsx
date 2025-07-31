import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const ResultsStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounter = () => {
    const target = 2;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(target * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-white text-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(65, 184, 213, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(65, 184, 213, 0.05) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Main Statement */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 leading-tight">
            We don't sell automation.
            <br />
            <span className="text-[#41B8D5]">We sell Results.</span>
          </h2>
        </div>

        {/* Single Powerful Metric */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-gradient-to-br from-white to-[#41B8D5]/5 rounded-3xl p-16 border-2 border-[#41B8D5]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group mb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#41B8D5]/5 to-transparent rounded-3xl group-hover:from-[#41B8D5]/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="text-8xl md:text-9xl font-extrabold text-[#41B8D5] mb-4">
                ${count.toFixed(1)}M+
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-black mb-6">
                Saved for Clients This Year
              </div>

              {/* Supporting Text */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Real savings, measurable results, transformative impact. Every
                dollar represents a process optimized and a business
                transformed.
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-4 opacity-60">
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-3 h-3 bg-[#41B8D5] rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[#41B8D5] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              Live Results
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="inline-flex items-center px-8 py-4 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-2xl text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#41B8D5]/25 group">
            <span className="mr-2">View Our Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsStatement;
