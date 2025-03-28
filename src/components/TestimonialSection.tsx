
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     quote: "Xalt Analytics transformed how we handle our customer feedback data. Their text analysis tools helped us identify critical issues and opportunities we were missing.",
//     author: "Sarah Johnson",
//     role: "CTO, TechCorp Inc.",
//     company: "TechCorp Inc."
//   },
//   {
//     quote: "The image and video analysis capabilities have revolutionized our retail analytics. We now have insights into customer behavior we never thought possible.",
//     author: "Michael Chen",
//     role: "Head of Analytics",
//     company: "Global Retail Solutions"
//   },
//   {
//     quote: "Implementing Xalt's audio analysis for our call center has improved our customer satisfaction scores by 32% in just three months.",
//     author: "Lisa Rodriguez",
//     role: "Customer Experience Director",
//     company: "ServiceFirst"
//   },
//   {
//     quote: "Their comprehensive approach to unstructured data has given us a competitive edge. We're now making decisions based on data that was previously inaccessible.",
//     author: "David Wilson",
//     role: "CEO",
//     company: "Innovative Strategies"
//   }
// ];

// const TestimonialSection = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Discover how businesses are transforming their unstructured data into competitive advantages with Xalt Analytics.
//           </p>
//         </div>

//         <Carousel 
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="mx-auto max-w-5xl"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/2">
//                 <Card className="h-full border-0 bg-white shadow-md">
//                   <CardContent className="p-6">
//                     <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
//                     <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
//                     <div>
//                       <p className="font-semibold text-gray-900">{testimonial.author}</p>
//                       <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <div className="flex justify-center mt-8 gap-4">
//             <CarouselPrevious className="static transform-none" />
//             <CarouselNext className="static transform-none" />
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
 
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, Tech Innovations",
    quote: "This product has completely transformed our workflow. Incredible efficiency and support!",
    avatar: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Developer, CodeCraft",
    quote: "Intuitive design and powerful features. Exactly what our team needed.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMA4XdU8sfnkmmxvxSREQaMLRaM6GNT4bpBB0mrXEQpghwTOceo7GJ7OgQpbn4DYatt0&usqp=CAU"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, Global Brands",
    quote: "A game-changer in our marketing strategy. Highly recommend!",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0uxTyjUvS64omq2tfoMrSzrat3Cpcc-4DtVIHt-pBsbGOcE0EYndZzK6zLKU3LCFmkA&usqp=CAU"
  }
];
 
const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
 
    return () => clearInterval(interval);
  }, []);
 
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
 
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
 
  return (

    <>

<div className="bg-black h-[90px]"></div>
    <Navbar />
    <br/><br/><br/>
    
    <div className="min-h-screen items-center justify-center p-4">

      <br/>

<div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             Discover how businesses are transforming their unstructured data into competitive advantages with Xalt Analytics.
          </p>
        </div>
      <div className="relative w-full max-w-4xl mx-auto bg-gray">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 pl-4"
              >
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-black shadow-lg "
                />
              </motion.div>
 
              {/* Testimonial Content */}
              <div className="text-center md:text-left flex-grow">
                <motion.blockquote
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg md:text-xl italic text-gray-800 mb-4"
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.blockquote>
               
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-black">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </p>
                </motion.div>
              </div>
            </div>
 
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="bg-black/10 hover:bg-black/20 text-black p-2 rounded-full transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextTestimonial}
                className="bg-black/10 hover:bg-black/20 text-black p-2 rounded-full transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
 
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentTestimonial
                    ? 'bg-black w-6'
                    : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    <br/>
    <Footer />
    </>
  );
};
 
export default TestimonialCarousel;
 