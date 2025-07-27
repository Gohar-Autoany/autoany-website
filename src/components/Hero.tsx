import { Button } from "@/components/ui/button";
import automationDashboard from "@/assets/automation-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, #0F0F23 0%, #1a1a2e 100%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Animated gradient mesh overlay */}
      <div 
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(167, 139, 250, 0.2) 0%, transparent 50%)',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Content container */}
      <div className="relative max-w-[1400px] mx-auto px-8 py-0">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] text-hero-text mb-6">
              Automate everything.{" "}
              <span className="block">Achieve anything.</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-hero-text-muted max-w-[600px] mb-12">
              Transform your business with intelligent automation solutions that streamline workflows, eliminate repetitive tasks, and unlock unprecedented efficiency across your entire organization.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-6 bg-hero-primary hover:bg-hero-primary/90 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-hero-primary/25"
              >
                Start Automation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 border-2 border-hero-glass text-hero-text font-semibold rounded-xl text-lg backdrop-blur-sm bg-hero-glass hover:bg-hero-glass/50 transition-all duration-300 hover:scale-105"
              >
                View Process
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src={automationDashboard}
                alt="Automation Dashboard Interface"
                className="w-full max-w-lg lg:max-w-none rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.3)] transform transition-transform duration-300 hover:scale-105"
              />
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;