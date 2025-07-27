import { 
  Workflow, 
  MessageSquare, 
  BarChart2, 
  RefreshCw 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and complex workflows to boost productivity and reduce errors across your entire organization."
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Implement intelligent chatbots to enhance customer support and engagement with 24/7 automated assistance."
    },
    {
      icon: BarChart2,
      title: "Data Analytics",
      description: "Leverage data insights to make informed decisions and optimize business strategies with real-time analytics."
    },
    {
      icon: RefreshCw,
      title: "Process Optimization",
      description: "Identify bottlenecks and refine processes for maximum efficiency and cost savings through intelligent analysis."
    }
  ];

  return (
    <section className="py-32 bg-services-bg">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-services-title mb-4">
            Our Automation Services
          </h2>
          <p className="text-xl text-services-subtitle max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive suite of automation solutions designed to streamline your operations and drive efficiency across every aspect of your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-services-card-bg border border-services-card-border rounded-2xl p-10 min-h-[400px] flex flex-col shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-services-icon-bg rounded-xl mb-6 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-services-title mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-services-subtitle leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a 
                  href="#" 
                  className="text-services-link font-medium hover:underline transition-all duration-200 inline-flex items-center group"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;