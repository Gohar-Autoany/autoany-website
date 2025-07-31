import { useEffect, useState } from "react";
import autoanyLogo from "@/assets/autoany-logo.svg";

const CircleOnlyLoading = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800); // Center dot appears
    const timer2 = setTimeout(() => setStage(2), 1600); // White circle grows
    const timer3 = setTimeout(() => setStage(3), 2400); // Teal ring expands
    const timer4 = setTimeout(() => setStage(4), 3200); // Black border completes
    const timer5 = setTimeout(() => setStage(5), 4000); // Final glow effect
    const timer6 = setTimeout(() => setStage(6), 4800); // Switch to real logo
    const timer7 = setTimeout(() => {
      setStage(7);
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-1000 ${
        stage === 7 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
      }}
    >
      {/* Wide Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 10% 20%, #41B8D5 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, #41B8D5 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #41B8D5 0%, transparent 70%),
            radial-gradient(circle at 20% 80%, #41B8D5 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, #41B8D5 0%, transparent 40%)
          `,
          }}
        ></div>
      </div>

      {/* Floating Background Logos */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src={autoanyLogo}
            alt=""
            className="absolute w-16 h-16 animate-float opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 800}ms`,
              animationDuration: `${8 + i * 2}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main Circle Animation OR Real Logo */}
        {stage < 6 ? (
          /* Animated Circle Construction - HUGE SIZE */
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Black Outer Ring - Appears last with dramatic effect */}
            <div
              className={`absolute w-96 h-96 border-[32px] border-black rounded-full transition-all duration-1200 ease-out ${
                stage >= 4
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-50 opacity-0 rotate-180"
              }`}
              style={{
                boxShadow: stage >= 4 ? "0 0 80px rgba(0, 0, 0, 0.3)" : "none",
              }}
            ></div>

            {/* Teal Middle Ring - Expands with bounce */}
            <div
              className={`absolute w-80 h-80 bg-[#41B8D5] rounded-full transition-all duration-1000 ease-out ${
                stage >= 3 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                boxShadow:
                  stage >= 3 ? "0 0 60px rgba(65, 184, 213, 0.5)" : "none",
              }}
            ></div>

            {/* White Inner Circle - Grows smoothly */}
            <div
              className={`absolute w-48 h-48 bg-white rounded-full transition-all duration-800 ease-out ${
                stage >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{
                boxShadow:
                  stage >= 2 ? "0 0 40px rgba(255, 255, 255, 0.8)" : "none",
              }}
            ></div>

            {/* Center Teal Dot - Appears first with pulse */}
            <div
              className={`absolute w-16 h-16 bg-[#41B8D5] rounded-full transition-all duration-600 ease-out ${
                stage >= 1
                  ? "scale-100 opacity-100 animate-pulse"
                  : "scale-0 opacity-0"
              }`}
              style={{
                boxShadow:
                  stage >= 1 ? "0 0 30px rgba(65, 184, 213, 0.7)" : "none",
              }}
            ></div>

            {/* Energy Rings - Multiple expanding rings */}
            {stage >= 3 && (
              <>
                <div className="absolute w-[420px] h-[420px] border-4 border-[#41B8D5]/30 rounded-full animate-ping"></div>
                <div className="absolute w-[480px] h-[480px] border-3 border-[#41B8D5]/20 rounded-full animate-ping animation-delay-500"></div>
                <div className="absolute w-[540px] h-[540px] border-2 border-[#41B8D5]/10 rounded-full animate-ping animation-delay-1000"></div>
              </>
            )}

            {/* Completion Flash */}
            {stage >= 5 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#41B8D5]/20 via-white/30 to-[#41B8D5]/20 rounded-full animate-ping"></div>
            )}
          </div>
        ) : (
          /* Real Logo After Animation */
          <div
            className={`transition-all duration-1500 ${
              stage === 6
                ? "opacity-100 scale-100 rotate-0"
                : stage === 7
                ? "opacity-100 scale-15 -translate-y-64"
                : "opacity-0 scale-80"
            }`}
          >
            <img
              src={autoanyLogo}
              alt="autoany"
              className="w-96 h-96 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 80px rgba(65, 184, 213, 0.6))",
              }}
            />
          </div>
        )}

        {/* Loading Text - Instead of Progress Bar */}
        <div
          className={`mt-16 transition-all duration-1000 ${
            stage >= 1 && stage < 6
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {stage === 1
                ? "Initializing autoany..."
                : stage === 2
                ? "Building automation core..."
                : stage === 3
                ? "Expanding capabilities..."
                : stage === 4
                ? "Finalizing architecture..."
                : stage === 5
                ? "Ready for automation!"
                : ""}
            </h2>

            {/* Animated Dots Instead of Progress Bar */}
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 bg-[#41B8D5] rounded-full transition-all duration-500 ${
                    stage >= 1 ? "animate-bounce opacity-100" : "opacity-30"
                  }`}
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: "1.5s",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        {stage >= 6 && (
          <div className="mt-12 text-center animate-fade-in-scale">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to autoany
            </h2>
            <p className="text-xl text-gray-600">
              Your automation journey begins now
            </p>
          </div>
        )}
      </div>

      {/* Orbiting Elements Instead of Progress Bar */}
      {stage >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 bg-[#41B8D5] rounded-full transition-all duration-1000 ${
                stage >= 2 ? "animate-float opacity-60" : "opacity-0"
              }`}
              style={{
                left: `${15 + i * 7}%`,
                top: `${20 + (i % 6) * 12}%`,
                animationDelay: `${i * 300}ms`,
                animationDuration: `${4 + i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Corner Elements */}
      <div className="absolute top-8 left-8 text-[#41B8D5] opacity-60">
        <div className="w-8 h-8 border-2 border-[#41B8D5] rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-8 right-8 text-[#41B8D5] opacity-60">
        <div className="w-8 h-8 border-2 border-[#41B8D5] rounded-full animate-pulse animation-delay-1000"></div>
      </div>
      <div className="absolute bottom-8 left-8 text-[#41B8D5] opacity-60">
        <div className="w-8 h-8 border-2 border-[#41B8D5] rounded-full animate-pulse animation-delay-2000"></div>
      </div>
      <div className="absolute bottom-8 right-8 text-[#41B8D5] opacity-60">
        <div className="w-8 h-8 border-2 border-[#41B8D5] rounded-full animate-pulse animation-delay-3000"></div>
      </div>
    </div>
  );
};

export default CircleOnlyLoading;
