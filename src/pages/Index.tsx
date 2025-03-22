
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import LeadMagnet from "@/components/LeadMagnet";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Unstructured Data Analytics Solutions"
        description="Transform your unstructured data into actionable insights with Xalt Analytics. Specialized in text, image, video, and audio analytics."
        canonical="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <LeadMagnet />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
