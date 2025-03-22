
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
            <p>
              When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
            <p>
              We use both session and persistent cookies on our website and we use different types of cookies to run the website:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
              <li>Preferences cookies. We may use preferences cookies to remember information that changes the way the website behaves or looks, such as the "remember me" functionality.</li>
              <li>Analytics cookies. We may use analytics cookies to track information about how the website is used so that we can make improvements.</li>
              <li>Marketing cookies. We may use marketing cookies to help us recognize you when you return to our website, understand your interests, and display personalized advertisements.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. More Information About Cookies</h2>
            <p>
              You can learn more about cookies at the following third-party websites:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-blue-600 hover:underline">http://www.allaboutcookies.org/</a></li>
              <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-blue-600 hover:underline">http://www.networkadvertising.org/</a></li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our website, prior to the change becoming effective and update the "Last Updated" date at the top of this Cookie Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicy;
