
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";
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
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Case studies from Fortune 500 companies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Implementation roadmap and ROI calculator</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Expert recommendations for your industry</span>
                    </li>
                  </ul>
                  
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button className="w-full group">
                        <Download className="mr-2 h-4 w-4" />
                        Download Free Guide
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="sm:max-w-md">
                      <SheetTitle>Get Your Free Guide</SheetTitle>
                      <SheetDescription>
                        Complete the form below to receive our comprehensive guide to unstructured data analytics.
                      </SheetDescription>
                      <div className="px-1 mt-4">
                        <LeadCaptureForm 
                          leadMagnetTitle="The Ultimate Guide to Unstructured Data Analytics" 
                          onSuccess={() => setIsOpen(false)}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Hidden Insights in Your Unstructured Data
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              80% of enterprise data is unstructured, yet most organizations analyze less than 20% of it. Our free guide shows you how to tap into this valuable resource to drive innovation and growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <span className="text-blue-700 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Proven Frameworks</h4>
                  <p className="text-gray-600">Step-by-step methods to analyze all types of unstructured data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <span className="text-blue-700 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Technology Selection</h4>
                  <p className="text-gray-600">Comparisons of tools and platforms for different data types</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                  <span className="text-blue-700 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Implementation Plan</h4>
                  <p className="text-gray-600">Timeline and resource guidelines for successful deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

