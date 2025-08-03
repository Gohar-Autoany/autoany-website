import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogoLoader from "@/components/LogoLoader"; // ✅ use new loader
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ResultsStatement from "@/components/ResultsStatement";
import TrustBuilder from "@/components/TrustBuilder";
import SimpleCTA from "@/components/SimpleCTA";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const MainContent = () => (
  <>
    <Navigation />
    <Hero />
    <Process />
    <ResultsStatement />
    <TrustBuilder />
    <SimpleCTA />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500); // optional fade-in delay
  };

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Logo Animation Loader */}
        {isLoading && <LogoLoader onComplete={handleLoadingComplete} />}

        {/* Main Website Content */}
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
