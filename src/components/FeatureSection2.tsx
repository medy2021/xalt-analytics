import React from 'react';

const DataMonetizationFeatures = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "End To End Analytics",
      description: "Comprehensive data analysis from collection to insights, providing a holistic view of your business metrics."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17c.612-1.576 1.707-3 3-3h8c1.293 0 2.388 1.424 3 3M11 21h2" />
        </svg>
      ),
      title: "Deep Learning & AI",
      description: "Advanced AI technologies that transform raw data into actionable intelligence and predictive insights."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Machine Learning Expertise",
      description: "Cutting-edge methods and platforms to extract maximum value from your data resources."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: "Data Visualization",
      description: "Transform complex data into clear, compelling visual narratives that drive decision-making."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cross-Industry Solutions",
      description: "Proven track record of solving complex business challenges across multiple industry domains."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us for Data Monetization
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock the full potential of your data with our comprehensive, innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default DataMonetizationFeatures;