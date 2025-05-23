import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { trackingConfig } from "@/lib/siteConfig";
import xaltVideo from "../assets/video.mp4";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-16 md:pb-16  bg-gradient-to-b from-blue-50 to-white  -mt-[24vh]">
      <div className="video-container">
        <a href="" target="_blank" rel="noopener noreferrer">
          <video autoPlay muted loop>
            <source src={xaltVideo} type="video/mp4" />
          </video>
        </a>
      </div>
      <br/>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Unlock the Power of Your Unstructured Data
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Xalt Analytics helps you mine and analyze text, image, video, and audio data to improve business decisions and predict future outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button 
                size="lg" 
                className="group"
                onClick={() => {
                  trackEvent(trackingConfig.conversionEvents.ctaClick, {
                    cta_type: "hero_consultation",
                    page_location: window.location.pathname,
                  });
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button> */}
              {/* <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  trackEvent(trackingConfig.conversionEvents.ctaClick, {
                    cta_type: "hero_learn_more",
                    page_location: window.location.pathname,
                  });
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button> */}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                // src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
           src="images/img-gen.jpg" 

                alt="Data Visualization" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-purple-600/20 mix-blend-multiply"></div>
            </div>
            {/* <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-purple-500 rounded-full blur-3xl opacity-30"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;