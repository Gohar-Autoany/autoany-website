import React from 'react';
import { Search, Target, Rocket, Workflow, MessageCircle, BarChart3, Database, Link, Settings } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We analyze your business operations and identify high-impact automation opportunities that align with your goals',
      icon: Search,
    },
    {
      number: '02', 
      title: 'Design',
      description: 'We create custom automation strategies and equip your team with the knowledge to implement AI solutions confidently',
      icon: Target,
    },
    {
      number: '03',
      title: 'Deploy', 
      description: 'We build and implement AI systems that deliver measurable results and continuously optimize performance',
      icon: Rocket,
    }
  ];

  const services = [
    {
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks and streamline business processes across your entire organization.',
      icon: Workflow,
    },
    {
      title: 'AI Chatbots',
      description: '24/7 intelligent customer support and lead qualification that never sleeps.',
      icon: MessageCircle,
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for smarter business decisions.',
      icon: BarChart3,
    },
    {
      title: 'CRM Automation',
      description: 'Automate customer relationship management with intelligent follow-ups and data sync.',
      icon: Database,
    },
    {
      title: 'API Integrations',
      description: 'Connect all your business tools seamlessly with custom integrations and data flow.',
      icon: Link,
    },
    {
      title: 'Process Optimization',
      description: 'Identify bottlenecks and inefficiencies to maximize operational performance.',
      icon: Settings,
    }
  ];

  return (
    <section id="process" className="py-24 bg-white" style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Process & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            How we transform your business through automation and the comprehensive solutions we provide
          </p>
        </div>

        {/* Process Steps Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">
              How We Work
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven 3-step methodology for successful automation implementation
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#41B8D5] text-white font-bold text-xl rounded-full mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 mx-auto text-[#41B8D5]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-black mb-4">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-24">
          <div className="w-16 h-px bg-gray-300"></div>
          <div className="mx-4 text-gray-400">•</div>
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Services Section */}
        <div id="services">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-black mb-4">
              What We Deliver
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to streamline your operations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:border-[#41B8D5]/20 hover:shadow-lg hover:-translate-y-2 group"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#41B8D5]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#41B8D5]/20 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-[#41B8D5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-black mb-4 group-hover:text-[#41B8D5] transition-colors duration-300">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;