// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useNavigate } from "react-router-dom";
// import Loader from "./Loader"; // Ensure this component is correctly implemented

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name is required" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   organization: z.string().optional(),
//   details: z.string().optional()
// });

// const LeadCaptureForm = ({ leadMagnetTitle , onSuccess }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       organization: "",
//       details: ""
//     }
//   });

//   const onSubmit = async (data ) => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://xalt-backend.onrender.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const responseData = await response.json();
//       console.log('Submission successful:', responseData);

//       navigate(`/thank-you?resource=${encodeURIComponent(leadMagnetTitle)}`, {
//         state: { fromSubmission: true }
//       });
//     } catch (error) {
//       console.error("Submission error", error);
//     } finally {
//       setLoading(false); // Stop loader when API response is received
//     }
//   };

//   return (
//     <div className="relative">
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//           <Loader />
//         </div>
//       )}

//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow-lg rounded-lg">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//           <input 
//             {...form.register("name")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Your Full Name"
//           />
//           {form.formState.errors.name && (
//             <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
//           <input 
//             type="email"
//             {...form.register("email")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="you@company.com"
//           />
//           {form.formState.errors.email && (
//             <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
//           <input 
//             {...form.register("organization")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Your Company or Organization"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//           <textarea 
//             {...form.register("details")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Share a brief overview of your data challenges"
//             rows={4}
//           />
//         </div>

//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Request Consultation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LeadCaptureForm;







// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useNavigate } from "react-router-dom";
// import Loader from "./Loader";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name is required" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   organization: z.string().optional(),
//   details: z.string().optional()
// });

// const LeadCaptureForm = ({ leadMagnetTitle, onSuccess }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       organization: "",
//       details: ""
//     }
//   });

//   // Load the HubSpot Forms script
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '//js.hsforms.net/forms/embed/v2.js';
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       // Prepare the data for HubSpot
// const hubspotData = {
//   fields: [
//     {
//       name: "firstname",
//       value: data.name
//     },
//     {
//       name: "email",
//       value: data.email
//     },
//     {
//       name: "organization",
//       value: data.organization || ""
//     },
//     {
//       name: "message",
//       value: data.details || "No message provided"
//     }
//   ],
//   context: {
//     pageUri: window.location.href,
//     pageName: leadMagnetTitle || document.title
//   }
// };

//    console.log("HubSpot submission data:", JSON.stringify(hubspotData, null, 2));
//       // Submit to HubSpot API
//       const response = await fetch(
//         "https://api.hsforms.com/submissions/v3/integration/submit/242448665/d7702fb0-b52b-4df3-864f-7f7a6ec6e74b", 
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(hubspotData)
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const responseData = await response.json();
//       console.log('HubSpot submission successful:', responseData);
      
//       // Alternative implementation using HubSpot's JS API
//       // if window.hbspt is available after script loads
//       /* 
//       if (window.hbspt) {
//         window.hbspt.forms.submit({
//           portalId: "242448665",
//           formId: "d7702fb0-b52b-4df3-864f-7f7a6ec6e74b",
//           formInstanceId: "submission-instance",
//           formData: hubspotData.fields,
//           onFormSubmit: function() {
//             console.log("Form submitted via hbspt");
//           }
//         });
//       }
//       */

//       navigate("/thank-you");
      
//       if (onSuccess && typeof onSuccess === 'function') {
//         onSuccess();
//       }
//     } catch (error) {
//       console.error("HubSpot submission error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative">
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//           <Loader />
//         </div>
//       )}

//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow-lg rounded-lg">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//           <input 
//             {...form.register("name")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Your Full Name"
//           />
//           {form.formState.errors.name && (
//             <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
//           <input 
//             type="email"
//             {...form.register("email")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="you@company.com"
//           />
//           {form.formState.errors.email && (
//             <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
//           <input 
//             {...form.register("organization")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Your Company or Organization"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//           <textarea 
//             {...form.register("details")}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             placeholder="Share a brief overview of your data challenges"
//             rows={4}
//           />
//         </div>

//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Request Consultation"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LeadCaptureForm;




import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  organization: z.string().optional(),
  details: z.string().optional()
});

const LeadCaptureForm = ({ leadMagnetTitle, onSuccess }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      details: ""
    }
  });

  // Load the HubSpot Forms script
  useEffect(() => {
    const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Prepare the data for HubSpot
const hubspotData = {
  fields: [
    {
      name: "firstname",
      value: data.name
    },
    {
      name: "email",
      value: data.email
    },
    {
      name: "organization",
      value: data.organization || ""
    },
    {
      name: "message",
      value: data.details || "No message provided"
    }
  ],
  context: {
    pageUri: window.location.href,
    pageName: leadMagnetTitle || document.title
  }
};

   console.log("HubSpot submission data:", JSON.stringify(hubspotData, null, 2));
      // Submit to HubSpot API
      const response = await fetch(
       "https://api.hsforms.com/submissions/v3/integration/submit/242448665/d7702fb0-b52b-4df3-864f-7f7a6ec6e74b",
     {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(hubspotData)
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

  const responseData = await response.json();
console.log('HubSpot response:', responseData);
if (responseData.status === "error") {
  console.error("Submission error from HubSpot:", responseData.message);
}

      
      // Alternative implementation using HubSpot's JS API
      // if window.hbspt is available after script loads
      /* 
      if (window.hbspt) {
        window.hbspt.forms.submit({
          portalId: "242448665",
          formId: "d7702fb0-b52b-4df3-864f-7f7a6ec6e74b",
          formInstanceId: "submission-instance",
          formData: hubspotData.fields,
          onFormSubmit: function() {
            console.log("Form submitted via hbspt");
          }
        });
      }
      */

      navigate("/thank-you");
      
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.error("HubSpot submission error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Loader />
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white shadow-lg rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input 
            {...form.register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            placeholder="Your Full Name"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
          <input 
            type="email"
            {...form.register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            placeholder="you@company.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
          <input 
            {...form.register("organization")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            placeholder="Your Company or Organization"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            {...form.register("details")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            placeholder="Share a brief overview of your data challenges"
            rows={4}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request Consultation"}
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
