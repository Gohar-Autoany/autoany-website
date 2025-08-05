// src/pages/Index.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ResultsStatement from "@/components/ResultsStatement";
import SimpleCTA from "@/components/SimpleCTA";

const Index = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Process />
      <ResultsStatement />
      <SimpleCTA />
    </>
  );
};

export default Index;
