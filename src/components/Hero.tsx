import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  const phrases = ["Achieve anything.", "We transform businesses."];

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];

    let typingSpeed = 100;
    if (isDeleting) typingSpeed = 50;

    const handleTyping = () => {
      setTypedText((prev) => {
        const updatedText = isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1);

        return updatedText;
      });

      // Handle when typing completes
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      // Handle when deleting completes
      if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, loopIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-20">
      {/* Background Layers */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute inset-0 opacity-20 animate-gradient-shift"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(65, 184, 213, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(65, 184, 213, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(65, 184, 213, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Hero Text */}
      <div className="relative h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-8 text-center">
        <div className="space-y-8">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight transition-all duration-1000 ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            } font-sans`}
          >
            <span className="block text-white animate-text-reveal font-[600]">
              Automate
            </span>
            <span className="block text-white animate-text-reveal-delay-1 font-[600]">
              everything.
            </span>
            <span className="block animate-text-reveal-delay-2 italic">
              <span className="text-transparent bg-gradient-to-r from-[#41B8D5] via-[#41B8D5] to-[#41B8D5]/60 bg-clip-text font-bold">
                {typedText}
              </span>
              <span className="text-[#41B8D5] animate-blink ml-1">|</span>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1000 delay-1000 ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="px-10 py-6 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-xl text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#41B8D5]/40 animate-pulse-glow"
            >
              Start Automation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 border-2 border-white/30 text-white font-semibold rounded-xl text-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:border-[#41B8D5]/50"
            >
              View Process
            </Button>
          </div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#41B8D5] rounded-full animate-float-slow opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#41B8D5] rounded-full animate-float opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-float-slow opacity-50"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient-text {
          0%,
          100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(65, 184, 213, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(65, 184, 213, 0.6);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-15px) translateX(-10px) scale(1.2);
          }
          66% {
            transform: translateY(-5px) translateX(15px) scale(0.8);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out forwards;
        }

        .animate-text-reveal-delay-1 {
          animation: text-reveal 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-text-reveal-delay-2 {
          animation: text-reveal 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
