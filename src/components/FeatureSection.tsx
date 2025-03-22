
import React from "react";
import { FileText, Image, Mic, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Text Data Analysis",
    description: "Extract insights from emails, social media, documents, and handwritten content with advanced text analysis.",
    icon: <FileText className="h-12 w-12 text-blue-500" />,
    benefits: ["Handwritten content recognition", "Sentiment analysis of social media", "Information extraction from business documents"]
  },
  {
    title: "Image & Video Analysis",
    description: "Turn video and image data into actionable intelligence with our cutting-edge algorithms.",
    icon: <Image className="h-12 w-12 text-blue-500" />,
    benefits: ["Mood and sentiment analysis from images", "Real-time video analysis", "Object and pattern recognition"]
  },
  {
    title: "Audio Data Analysis",
    description: "Hear what your data is saying with our advanced audio analysis solutions.",
    icon: <Mic className="h-12 w-12 text-blue-500" />,
    benefits: ["Mobile call data analysis", "Call center record analysis", "Improved QA & QC processes"]
  },
  {
    title: "Comprehensive Data Solutions",
    description: "Integrate all your unstructured data sources for holistic business intelligence.",
    icon: <Database className="h-12 w-12 text-blue-500" />,
    benefits: ["Data mining from various sources", "Improved business decision-making", "Predictive analytics and insights"]
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Unstructured Data Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform raw, unorganized data into valuable business insights with our comprehensive analytics solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-blue-500">•</span>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
