import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const leadMagnetTitle = queryParams.get('resource') || "The Ultimate Guide";
  
  useEffect(() => {
    // If user directly navigates to this page without coming from form submission
    if (!location.state?.fromSubmission) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 30000); // Redirect after 30 seconds
      
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Thank You"
        description="Thank you for requesting our resource."
        canonical="/thank-you"
      />
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Download className="h-10 w-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your copy of <span className="font-semibold">{leadMagnetTitle}</span> is on its way to your inbox.
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-2">What happens next?</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Check your email inbox (and spam folder just in case)</li>
              <li>Click the download link in the email</li>
              <li>Save the guide for future reference</li>
            </ol>
          </div>
          
          <Button 
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Homepage
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;