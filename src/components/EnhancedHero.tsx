import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Animated Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0F0F23 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />
        <div
          className="absolute top-60 right-32 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl animate-float animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${
              mousePosition.y * -0.3
            }px)`,
          }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-float animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.7}px, ${
              mousePosition.y * 0.7
            }px)`,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full gap-px">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/10 hover:bg-white/5 transition-colors duration-1000"
                style={{ animationDelay: `${i * 20}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Contrarian Statement */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 font-medium mb-8 border border-white/20">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                We are not just an automation company
              </div>

              <div className="space-y-4 mb-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="text-white/90">We don't just build</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-gradient-shift">
                    AI tools.
                  </span>
                  <br />
                  <span className="text-white">We transform</span>
                  <br />
                  <span className="text-white">entire businesses.</span>
                </h1>
              </div>
            </div>

            {/* Mission Statement */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-light">
                One trusted partner to guide you through your entire
                <span className="text-blue-300 font-medium">
                  {" "}
                  automation journey.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center">
                <span className="mr-2">Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <div
              className={`transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center space-x-6 pt-8">
                <div className="text-white/60 text-sm">Trusted by</div>
                <div className="flex items-center space-x-4">
                  {["150+", "businesses", "automated"].map((text, index) => (
                    <div
                      key={index}
                      className="text-white/80 text-sm font-medium"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-all duration-700 group"
                style={{
                  transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${
                    mousePosition.y * -0.5
                  }deg)`,
                }}
              >
                {/* Mock Interface */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                    <div className="text-white/60 text-xs">
                      autoany.io Dashboard
                    </div>
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded animate-pulse animation-delay-500 w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded animate-pulse animation-delay-1000 w-1/2"></div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="text-blue-300 text-2xl font-bold animate-counter">
                        67%
                      </div>
                      <div className="text-white/60 text-xs">
                        Efficiency Gain
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="text-purple-300 text-2xl font-bold animate-counter animation-delay-1000">
                        $2M+
                      </div>
                      <div className="text-white/60 text-xs">
                        Client Savings
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  Live Results
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes counter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-counter {
          animation: counter 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default EnhancedHero;
