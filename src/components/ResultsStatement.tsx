import { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap, Target, TrendingUp, Clock } from "lucide-react";

const ResultsStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Function to trigger the Navigation's contact form
  const handleOpenContactForm = () => {
    console.log("ResultsStatement: Dispatching openContactForm event");
    window.dispatchEvent(new CustomEvent("openContactForm"));
  };

  const impactAreas = [
    {
      icon: Zap,
      title: "Workflow Efficiency",
      description: "Streamlined processes",
    },
    {
      icon: Target,
      title: "Process Optimization",
      description: "Eliminated bottlenecks",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Measurable outcomes",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automated operations",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-20 bg-white text-center relative overflow-hidden"
      style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(65, 184, 213, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(65, 184, 213, 0.03) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Main Statement */}
        <div
          className={`transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            We don't sell automation.
            <br />
            <span className="text-[#41B8D5]">We sell Results.</span>
          </h2>
        </div>

        {/* Supporting Content */}
        <div
          className={`transition-all duration-800 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Every automation we build is designed for measurable business
            impact. From streamlined workflows to eliminated bottlenecks, we
            focus on outcomes that truly matter to your bottom line.
          </p>
        </div>

        {/* Impact Areas Grid */}
        <div
          className={`transition-all duration-800 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#41B8D5]/5 rounded-2xl p-8 border border-[#41B8D5]/10 hover:border-[#41B8D5]/20 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 mx-auto text-[#41B8D5] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtext */}
        <div
          className={`transition-all duration-800 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg text-[#41B8D5] font-semibold mb-8">
            Real solutions. Honest partnerships. Transformative results.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-800 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={handleOpenContactForm}
            className="inline-flex items-center px-8 py-4 bg-[#41B8D5] hover:bg-[#41B8D5]/90 text-white font-semibold rounded-lg text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg group"
          >
            <span className="mr-2">Start Your Transformation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsStatement;
