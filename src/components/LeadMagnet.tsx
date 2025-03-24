import React from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import LeadCaptureForm from "./LeadCaptureForm";

const LeadMagnet = () => {
  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy?</h2>
          <p className="text-gray-600 text-lg">
            Get in touch with our experts to discover how we can help you unlock the value in your unstructured data.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-6 text-white">
              <h3 className="text-xl font-bold">
                Contact Our Data Analytics Experts
              </h3>
            </div>
            <div className="p-6">
              <LeadCaptureForm 
                leadMagnetTitle="Data Analytics Consultation" 
                onSuccess={() => {
                  toast.success("Thank you for your interest. We'll be in touch soon!");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;