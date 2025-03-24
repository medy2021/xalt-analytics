import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { trackingConfig } from "@/lib/siteConfig";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const leadMagnetTitle = queryParams.get('resource') || "The Ultimate Guide";

  useEffect(() => {
    // Track the thank you page view as a conversion
    trackEvent(trackingConfig.conversionEvents.downloadGuide, {
      resource: leadMagnetTitle
    });
    
    // Redirect to home if not coming from form submission
    if (!location.state?.fromSubmission) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate, leadMagnetTitle]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email!</h1>
        <p className="text-gray-600 mb-6">
          We've sent {leadMagnetTitle} to your inbox. Please check your email to access your download.
        </p>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              Don't see the email? Check your spam folder or wait a few minutes for it to arrive.
            </p>
          </div>
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="w-full"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

