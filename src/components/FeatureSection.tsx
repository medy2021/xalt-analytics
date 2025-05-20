


import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

const features = [
  {
    title: "AI & ML Model Creation",
    description: "AI and machine learning develop systems that learn and adapt to new data.",
    image: "/images/ai_ml.jpg",
      benefits: ["AI enables computers to perform human-like tasks such as perception, speech recognition, decision-making, and translation. It includes narrow AI (task-specific) and general AI (human-like intelligence)."]
  },
  {
    title: "Text Data Analysis",
    description: "Extract insights from emails, social media, documents, and handwritten content with advanced text analysis.",
    image: "/images/textanalytics.jpg",
    benefits: ["Handwritten content recognition", "Sentiment analysis of social media", "Information extraction from business documents"]
  },
  {
    title: "Image & Video Analysis", 
    description: "Turn video and image data into actionable intelligence with our cutting-edge algorithms.",
    image: "images/img-gen.jpg",
    benefits: ["Mood and sentiment analysis from images", "Real-time video analysis", "Object and pattern recognition"]
  },
  {
    title: "Audio Data Analysis",
    description: "Hear what your data is saying with our advanced audio analysis solutions.",
    image: "images/dash.jpg",
    benefits: ["Mobile call data analysis", "Call center record analysis", "Improved QA & QC processes"]
  },
  {
    title: "Comprehensive Data Solutions",
    description: "Integrate all your unstructured data sources for holistic business intelligence.",
    image: "images/dataAnalyst.jpg",
    benefits: ["Data mining from various sources", "Improved business decision-making", "Predictive analytics and insights"]
  },
  {
    title: "Big Data Analytics",
    description: "Big data analytics extracts insights from large datasets.",
    image: "images/bigData.jpg",
    benefits: [
      "Big data analytics extracts valuable insights using advanced technologies.",
      "Hadoop enables distributed processing of large datasets."
    ]
    
  },
  {
    title: "Software Development",
    description: "Software development involves coding and testing applications.",
    image: "images/imgB.jpg",
    benefits: [
      "Software development enables automation, efficiency, and user engagement.",
      "Agile and DevOps ensure continuous improvement.",
      "JavaScript, Python, and Java are widely used."
    ]
  },
  
  {
    title: "LLM",
    description: "LLMs generate human-like text using AI.",
    image: "images/llm4.png",
    benefits: [
      "LLMs use vast data and neural networks for accurate language processing.",
      "They power chatbots, content generation, and translation.",
      "Popular models include GPT, BERT, and T5."
    ]    
  }
  
];

const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (


    <>
    <Navbar />
   
    <div
      className="relative w-full h-80 bg-white shadow-lg overflow-hidden cursor-pointer transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image + Title (Visible by Default) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{feature.title}</h3>
        </div>
      </div>

      {/* Text Details (Shown on Hover) */}
      <div
  className={`absolute inset-0 bg-white p-6 transition-opacity duration-500 flex flex-col justify-center overflow-y-auto ${
    isHovered ? "opacity-100" : "opacity-0"
  }`}
  style={{ maxHeight: "100%" }} // Ensure it takes full height but scrolls when needed
>
  <h3 className="text-2xl font-bold text-blue-800 mb-4">{feature.title}</h3>
  <p className="text-gray-600 mb-4">{feature.description}</p>
  <ul className="list-disc list-inside text-gray-700">
    {feature.benefits.map((benefit, index) => (
      <li key={index} className="text-lg">{benefit}</li>
    ))}
  </ul>
</div>

    </div>

    </>
  );
};

const FeatureSection = () => {
  return (

    <>
        {/* <br/><br/> <br/><br/> */}
        <div className="bg-[#111827] h-[63px]"></div>
        

        {/* <img src="/images/service.jpg" style={{ width: "100%", height: "250px" }} alt="About Image" /> */}


        <br/><br/> 
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-900">Unstructured Data Solutions</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Transform raw, unorganized data into valuable business insights.
          </p>
        
        <br/>
          {/* <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          We are your once stop shop for the analysis of business data and converting it into a data driven application.          </p>
         */}
        </div>

         <div>
          <img src="/images/home-content.png" />
         </div>
         <br/>
        
        {/* 2x2 Grid for Large Screens / 1 Column for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>

<br/> <br/>
    <Footer />
    </>
  );
};

export default FeatureSection;
