import { useEffect, useRef, useState } from "react";
import { TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const SimplifiedResults = () => {
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
      className="py-32 relative overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        {/* Morningside-style Statement */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 font-medium mb-12 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Results That Matter
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            We don't sell automation.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We sell Results.
            </span>
          </h2>
        </div>

        {/* Single Powerful Metric */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative inline-block">
            {/* Main Metric */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-16 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              {/* Animated Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Counter */}
              <div className="space-y-4">
                <div className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${count.toFixed(1)}M+
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                  Generated for Clients This Year
                </div>
                <div className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Real savings, measurable results, transformative impact. Every
                  dollar represents a process optimized, a workflow automated,
                  and a business transformed.
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xs font-bold">Live</span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Side Decorations */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-purple-200/30 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            <div className="absolute -right-8 top-1/3 w-12 h-12 bg-blue-200/30 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Supporting Text */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            The best automation systems are built side by side. Partner with us
            to unlock your business's true potential.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 group">
            <span className="mr-2">See Our Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 flex justify-center space-x-8 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SimplifiedResults;
