import { useEffect, useRef, useState } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ savings: 0, processes: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { savings: 2, processes: 200, satisfaction: 98 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts({
        savings: Math.floor(targets.savings * easeOut),
        processes: Math.floor(targets.processes * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const stats = [
    {
      number: `$${counts.savings}M+`,
      label: "Saved for Clients",
      delay: "0ms"
    },
    {
      number: `${counts.processes}+`,
      label: "Processes Automated",
      delay: "200ms"
    },
    {
      number: `${counts.satisfaction}%`,
      label: "Client Satisfaction",
      delay: "400ms"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--stats-gradient-start)) 0%, hsl(var(--stats-gradient-end)) 100%)'
      }}
    >
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl border border-stats-card-border backdrop-blur-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                animationDelay: isVisible ? stat.delay : '0ms'
              }}
            >
              <div 
                className={`text-6xl font-extrabold text-stats-number mb-2 transition-all duration-800 ${
                  isVisible ? 'animate-count-up' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: stat.delay }}
              >
                {stat.number}
              </div>
              <div 
                className={`text-xl font-medium text-stats-label transition-all duration-800 ${
                  isVisible ? 'animate-count-up' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `calc(${stat.delay} + 100ms)` }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;