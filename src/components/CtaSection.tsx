
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { trackingConfig } from "@/lib/siteConfig";

const CtaSection = () => {
  const handleCtaClick = (ctaType: string) => {
    trackEvent(trackingConfig.conversionEvents.ctaClick, {
      cta_type: ctaType,
      page_location: window.location.pathname,
    });
    
    // Scroll to contact form
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Ignoring Valuable Data
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Turn unstructured data into actionable insights that drive business growth and innovation. Our team of experts is ready to help you harness the full potential of your data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50 group"
              onClick={() => handleCtaClick("consultation")}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

