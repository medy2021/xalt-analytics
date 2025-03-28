import React from "react";
import LeadCaptureForm from "./LeadCaptureForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LeadMagnet = () => {
  return (

    <>
        <div className="bg-[#111827] h-[63px]"></div>
        <Navbar />
 
    <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 to-white">

<div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-black-900 mb-4">
                Unlock Your Data Potential
              </h2>
              <p className="text-gray-600 text-lg">
                Connect with our analytics experts for a personalized consultation
              </p>
            </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Support Person Image Section */}
          <div className="hidden md:block">
            <div className="bg-blue-100 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <img 
                src="/images/imgA.jpg" 
                alt="Data Analytics Expert" 
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>

          {/* Lead Capture Form Section */}
          <div>

            <LeadCaptureForm 
              leadMagnetTitle="Data Strategy Consultation" 
              onSuccess={() => {
                // Optional success handling
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />

    </>
  );
};

export default LeadMagnet;