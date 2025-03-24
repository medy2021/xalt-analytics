// Add this to your imports if not already present
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ThankYouPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const resource = searchParams.get('resource');
  
  // Check if we came from a submission where the email failed
  const { fromSubmission, emailFailed, downloadLink } = location.state || {};
  
  return (
    <div className="container max-w-4xl py-12 px-4 md:py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Thank You!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {emailFailed 
            ? "We couldn't send the email, but you can still download your guide below."
            : `We've sent ${resource ? `"${resource}"` : "your guide"} to your email.`}
        </p>
        
        {emailFailed && downloadLink && (
          <div className="mt-8">
            <Button 
              size="lg" 
              onClick={() => window.open(downloadLink, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Your Guide
            </Button>
          </div>
        )}
        
        <div className="mt-10">
          <p className="text-base text-gray-500">
            If you have any questions, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;