import { useEffect, useState } from "react";
import autoanyLogo from "@/assets/autoany-logo.svg";

const MorphLogoAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 600); // Dot appears and grows
    const timer2 = setTimeout(() => setStage(2), 1200); // White circle morphs in
    const timer3 = setTimeout(() => setStage(3), 1800); // Teal ring morphs
    const timer4 = setTimeout(() => setStage(4), 2400); // Black border morphs
    const timer5 = setTimeout(() => setStage(5), 3000); // Text morphs in
    const timer6 = setTimeout(() => setStage(6), 3800); // Complete glow effect
    const timer7 = setTimeout(() => setStage(7), 4400); // Switch to real logo
    const timer8 = setTimeout(() => {
      setStage(8);
      onComplete();
    }, 5400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-1000 ${
        stage === 8 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #41B8D5 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, #41B8D5 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Morphing Animation OR Real Logo */}
        {stage < 7 ? (
          /* Animated Logo Morphing */
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Black Outer Ring - Morphs from a small dot */}
            <div
              className={`absolute bg-black rounded-full transition-all duration-1000 ease-out ${
                stage >= 4
                  ? "w-80 h-80 border-[24px] border-transparent"
                  : stage >= 1
                  ? "w-4 h-4"
                  : "w-0 h-0"
              } ${stage >= 4 ? "animate-pulse-glow" : ""}`}
              style={{
                background: stage >= 4 ? "transparent" : "#000000",
                border: stage >= 4 ? "24px solid #000000" : "none",
              }}
            ></div>

            {/* Teal Middle Ring - Morphs and expands */}
            <div
              className={`absolute bg-[#41B8D5] rounded-full transition-all duration-1000 ease-out ${
                stage >= 3
                  ? "w-64 h-64 opacity-100"
                  : stage >= 1
                  ? "w-8 h-8 opacity-80"
                  : "w-0 h-0 opacity-0"
              } ${stage >= 3 ? "animate-scale-pulse" : ""}`}
            ></div>

            {/* White Inner Circle - Grows from center */}
            <div
              className={`absolute bg-white rounded-full transition-all duration-800 ease-out ${
                stage >= 2
                  ? "w-36 h-36 opacity-100"
                  : stage >= 1
                  ? "w-2 h-2 opacity-50"
                  : "w-0 h-0 opacity-0"
              } ${stage >= 2 ? "animate-bounce-subtle" : ""}`}
            ></div>

            {/* Center Teal Dot - Appears first, then pulses */}
            <div
              className={`absolute bg-[#41B8D5] rounded-full transition-all duration-600 ease-out ${
                stage >= 1
                  ? "w-12 h-12 opacity-100 animate-pulse"
                  : "w-0 h-0 opacity-0"
              }`}
            ></div>

            {/* Energy Waves */}
            {stage >= 3 && (
              <>
                <div className="absolute w-96 h-96 border-4 border-[#41B8D5]/30 rounded-full animate-ping animation-delay-0"></div>
                <div className="absolute w-[420px] h-[420px] border-3 border-[#41B8D5]/20 rounded-full animate-ping animation-delay-300"></div>
                <div className="absolute w-[450px] h-[450px] border-2 border-[#41B8D5]/10 rounded-full animate-ping animation-delay-600"></div>
              </>
            )}

            {/* Completion Flash */}
            {stage >= 6 && (
              <div className="absolute inset-0 bg-[#41B8D5]/20 rounded-full animate-ping"></div>
            )}
          </div>
        ) : (
          /* Real Logo After Morphing */
          <div
            className={`transition-all duration-1000 ${
              stage === 7
                ? "opacity-100 scale-100 rotate-0"
                : stage === 8
                ? "opacity-100 scale-20 -translate-y-56"
                : "opacity-0 scale-80 rotate-12"
            }`}
          >
            <img
              src={autoanyLogo}
              alt="autoany"
              className="w-96 h-96 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 60px rgba(65, 184, 213, 0.6))",
              }}
            />
          </div>
        )}

        {/* Text Morphing Animation */}
        {stage >= 5 && stage < 7 && (
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center text-7xl font-bold">
              {/* "auto" morphs in with wave effect */}
              <span
                className={`transition-all duration-1000 ease-out ${
                  stage >= 5
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-50 translate-y-8"
                }`}
                style={{
                  color: "#41B8D5",
                  textShadow:
                    stage >= 6 ? "0 0 20px rgba(65, 184, 213, 0.5)" : "none",
                }}
              >
                auto
              </span>
              {/* "any" morphs in with delay */}
              <span
                className={`transition-all duration-1000 ease-out ${
                  stage >= 5
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-50 translate-y-8"
                }`}
                style={{
                  color: "#000000",
                  animationDelay: "400ms",
                  textShadow:
                    stage >= 6 ? "0 0 20px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                any
              </span>
            </div>
          </div>
        )}

        {/* Loading Text */}
        <div
          className={`mt-12 transition-all duration-1000 ${
            stage >= 2 && stage < 7
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {stage === 2
                ? "Core initializing..."
                : stage === 3
                ? "Expanding capabilities..."
                : stage === 4
                ? "Architecture complete..."
                : stage === 5
                ? "Branding activated..."
                : stage === 6
                ? "autoany ready for action!"
                : ""}
            </h2>
            <div className="flex justify-center mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 bg-[#41B8D5] rounded-full mx-1 ${
                    stage >= 2 ? "animate-bounce" : ""
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar with Morphing Effect */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80">
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#41B8D5] to-[#41B8D5]/60 transition-all duration-800 ease-out rounded-full relative"
            style={{
              width:
                stage === 0
                  ? "0%"
                  : stage === 1
                  ? "15%"
                  : stage === 2
                  ? "30%"
                  : stage === 3
                  ? "45%"
                  : stage === 4
                  ? "60%"
                  : stage === 5
                  ? "75%"
                  : stage === 6
                  ? "90%"
                  : "100%",
            }}
          >
            {stage >= 3 && (
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-[#41B8D5] font-bold text-sm">
            {Math.round((stage / 7) * 100)}%
          </span>
        </div>
      </div>

      {/* Morphing Particles */}
      {stage >= 4 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-[#41B8D5] transition-all duration-1000 ${
                stage >= 4 ? "animate-float opacity-60" : "opacity-0"
              }`}
              style={{
                width: `${4 + (i % 4) * 2}px`,
                height: `${4 + (i % 4) * 2}px`,
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 7) * 12}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: `${2 + i * 0.05}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MorphLogoAnimation;
