import { ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Analyze",
      description: "We audit your current processes to identify bottlenecks, inefficiencies, and opportunities for automation that will deliver the highest ROI."
    },
    {
      number: "2", 
      title: "Design",
      description: "We create custom automation solutions tailored to your specific needs, ensuring seamless integration with your existing systems and workflows."
    },
    {
      number: "3",
      title: "Deploy", 
      description: "We implement and optimize systems with ongoing support, monitoring performance and making adjustments to maximize efficiency and results."
    }
  ];

  return (
    <section className="py-32 bg-process-bg">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-process-title">
            How We Transform Your Business
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Process Card */}
              <div className="relative bg-process-card-bg rounded-[20px] px-8 py-12 shadow-[0_8px_32px_rgba(0,0,0,0.06)] h-full">
                {/* Step Number */}
                <div className="absolute -top-5 left-8 w-10 h-10 bg-process-step-bg rounded-full flex items-center justify-center">
                  <span className="text-process-step-text font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="max-w-[280px]">
                  <h3 className="text-3xl font-semibold text-process-card-title mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-process-card-desc">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-process-arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;