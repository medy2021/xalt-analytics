
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Xalt Analytics transformed how we handle our customer feedback data. Their text analysis tools helped us identify critical issues and opportunities we were missing.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp Inc.",
    company: "TechCorp Inc."
  },
  {
    quote: "The image and video analysis capabilities have revolutionized our retail analytics. We now have insights into customer behavior we never thought possible.",
    author: "Michael Chen",
    role: "Head of Analytics",
    company: "Global Retail Solutions"
  },
  {
    quote: "Implementing Xalt's audio analysis for our call center has improved our customer satisfaction scores by 32% in just three months.",
    author: "Lisa Rodriguez",
    role: "Customer Experience Director",
    company: "ServiceFirst"
  },
  {
    quote: "Their comprehensive approach to unstructured data has given us a competitive edge. We're now making decisions based on data that was previously inaccessible.",
    author: "David Wilson",
    role: "CEO",
    company: "Innovative Strategies"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how businesses are transforming their unstructured data into competitive advantages with Xalt Analytics.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border-0 bg-white shadow-md">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
                    <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
