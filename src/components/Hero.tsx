import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  const phrases = ["Achieve Anything."];

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];
    let typingSpeed = isDeleting ? 50 : 100;

    const type = () => {
      setTypedText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopIndex]);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-white pt-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div
        className="absolute inset-0 opacity-5 animate-pulse"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(65, 185, 213, 0.1) 0%, transparent 50%)"
        }}
      />

      <div className="relative">
        {/* Hero Content */}
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black mb-4">
            Automate Everything.
          </h1>
          
          <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#41B8D5] font-mono whitespace-nowrap mb-8">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-lg md:text-xl text-[#6D6E71] leading-relaxed font-normal max-w-3xl mb-12">
            Partner with autoany to identify high-impact automation opportunities, implement intelligent solutions, and transform your business operations with measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleSmoothScroll('contact')}
              size="lg"
              className="bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Free Consultation
            </Button>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;