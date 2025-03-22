
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Xalt Analytics ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Personal Information</h3>
            <p>
              We may collect personal identification information, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Job title</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Usage Data</h3>
            <p>
              We may also collect information on how the website is accessed and used ("Usage Data"). This may include:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Your computer's Internet Protocol address (IP address)</li>
              <li>Browser type and version</li>
              <li>Pages of our website that you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service ("Service Providers"), to provide the service on our behalf, to perform service-related services or to assist us in analyzing how our service is used.
            </p>
            <p>
              These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Data Protection Rights</h2>
            <p>
              You have the following data protection rights:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>The right to access, update or delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>By email: info@xaltanalytics.com</li>
              <li>By phone: (555) 123-4567</li>
              <li>By mail: 123 Analytics Ave, Data City, DC 10101</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
