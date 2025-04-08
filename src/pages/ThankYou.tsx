// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { CheckCircle } from "lucide-react";
// import { trackEvent } from "@/lib/tracking";
// import { trackingConfig } from "@/lib/siteConfig";

// const ThankYou = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(location.search);
//   const leadMagnetTitle = queryParams.get('resource') || "The Ultimate Guide";

//   useEffect(() => {
//     // Track the thank you page view as a conversion
//     trackEvent(trackingConfig.conversionEvents.downloadGuide, {
//       resource: leadMagnetTitle
//     });
    
//     // Redirect to home if not coming from form submission
//     if (!location.state?.fromSubmission) {
//       const timer = setTimeout(() => {
//         navigate('/');
//       }, 30000);
//       return () => clearTimeout(timer);
//     }
//   }, [location, navigate, leadMagnetTitle]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
//         <div className="mb-6 flex justify-center">
//           <CheckCircle className="h-16 w-16 text-green-500" />
//         </div>
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email!</h1>
//         <p className="text-gray-600 mb-6">
//           We've sent {leadMagnetTitle} to your inbox. Please check your email to access your download.
//         </p>
//         <div className="space-y-4">
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <p className="text-sm text-blue-700">
//               Don't see the email? Check your spam folder or wait a few minutes for it to arrive.
//             </p>
//           </div>
//           <Button
//             onClick={() => navigate('/')}
//             variant="outline"
//             className="w-full"
//           >
//             Return to Homepage
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThankYou;



import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// 👇 Add this block to fix TypeScript/Vite complaining about window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
 
const ThankYou = () => {

  const [particles, setParticles] = useState([]);

  // <!-- Event snippet for Form Submission Thank-You  Page conversion page -->
  useEffect(() => {
    if (typeof window.gtag === 'function') {

      window.gtag('event', 'conversion', {
        send_to: 'AW-16884246284/-W73CNuV37UaEIzOhPM-',   
        value: 1.0,
        currency: 'MXN',
      });
    }
  }, []);


  // <!-- Event snippet for Form Submission - ThankYou - Youtube conversion page -->
  
  useEffect(() => {
    if (typeof window.gtag === 'function') {

      window.gtag('event', 'conversion', {
        send_to: 'AW-16884246284/291bCISr07UaEIzOhPM-',
      value: 1.0,
      currency: 'MXN'
      });
    }
  }, []);



  const navigate = useNavigate();
 
  const colors = ['#0056b3', '#00a8e8', '#e6f2ff'];
 
  const createParticles = () => {

    const newParticles = [];

    for (let i = 0; i < 30; i++) {

      const size = Math.random() * 12 + 5;

      const color = colors[Math.floor(Math.random() * colors.length)];

      const left = Math.random() * 100;
      const delay = Math.random() * 5;

      const duration = Math.random() * 3 + 2;
 
      newParticles.push({

        id: i,

        size,

        color,

        left,

        delay,

        duration

      });

    }

    setParticles(newParticles);

  };
 
  const createConfetti = () => {

    const confettiParticles = [];

    for (let i = 0; i < 150; i++) {

      const size = Math.random() * 10 + 3;

      const color = colors[Math.floor(Math.random() * colors.length)];

      const left = 50 + (Math.random() - 0.5) * 80;

      const initialY = 50 + (Math.random() - 0.5) * 20;

      const speedX = (Math.random() - 0.5) * 8;

      const speedY = Math.random() * 6 + 4;

      const rotation = (Math.random() - 0.5) * 20;
 
      confettiParticles.push({

        id: `confetti-${i}`,

        size,

        color,

        left,

        initialY,

        speedX,

        speedY,

        rotation

      });

    }

    setParticles(confettiParticles);

  };
 
  const handleHomeClick = () => {

    createConfetti();

    setTimeout(() => {


      // Uncomment the line below to actually navigate

      navigate('/');

    }, 500);

  };
 
  useEffect(() => {

    createParticles();

    const particleInterval = setInterval(createParticles, 5000);
 
    return () => {

      clearInterval(particleInterval);

    };

  }, []);
 
  return (
<div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf7]">

      {/* Particles */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none">

        {particles.map((particle) => (
<div

            key={particle.id}

            className="absolute rounded-full opacity-0 animate-float"

            style={{

              width: `${particle.size}px`,

              height: `${particle.size}px`,

              backgroundColor: particle.color,

              left: `${particle.left}%`,

              bottom: '-20px',

              animationDuration: `${particle.duration}s`,

              animationDelay: `${particle.delay}s`

            }}

          />

        ))}
</div>
 
      {/* Thank You Card */}
<div className="bg-white rounded-2xl shadow-lg p-10 w-11/12 max-w-md text-center relative z-10 transform translate-y-5 opacity-0 animate-slideUp">

        {/* Icon Wrapper */}
<div className="bg-[#e6f2ff] w-24 h-24 rounded-full mx-auto mb-5 flex justify-center items-center relative">
<div className="absolute w-full h-full border-3 border-[#0056b3] rounded-full opacity-0 animate-ripple"></div>
<div className="absolute w-full h-full border-3 border-[#0056b3] rounded-full opacity-0 animate-ripple delay-300"></div>
<div className="text-[#0056b3] text-5xl transform scale-0 animate-scaleIn">✓</div>
</div>
 
        <h1 className="text-[#0056b3] mb-4 text-3xl opacity-0 animate-fadeIn delay-600">

          Thank you for contacting us!
</h1>
<p className="text-[#555] mb-8 leading-relaxed text-base opacity-0 animate-fadeIn delay-800">

          We've received your message and will get back to you soon.
</p>
 
        <button 

          onClick={handleHomeClick}

          className="inline-block bg-[#0056b3] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:bg-[#003d82] hover:translate-y-[-3px] hover:shadow-lg active:translate-y-[-1px] opacity-0 animate-fadeIn delay-1000"
>

          Return Home
</button>
</div>
</div>

  );

};
 
export default ThankYou;
 