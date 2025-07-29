import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogoLoadingAnimation from "@/components/LogoLoadingAnimation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ResultsStatement from "@/components/ResultsStatement";
import TrustBuilder from "@/components/TrustBuilder";
import SimpleCTA from "@/components/SimpleCTA";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const MainContent = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Process />
      <ResultsStatement />
      <TrustBuilder />
      <SimpleCTA />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Loading Animation */}
        {isLoading && (
          <LogoLoadingAnimation onComplete={handleLoadingComplete} />
        )}

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
