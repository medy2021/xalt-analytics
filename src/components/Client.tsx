// import React from "react";
// import { motion } from "framer-motion";

// const clients = [
//   { name: "AVL", image: "/clients/avl1.png" },
//   { name: "Live Intent", image: "/clients/live intent.png" },
//   { name: "Tessolve", image: "/clients/Tessolve.png" },
//   { name: "MPPKVVCL", image: "/clients/MPPKVVCL.png" },
//   { name: "Nikaza", image: "/clients/nikaza.png" },
//   { name: "MPPKVVCL", image: "/clients/Spartans-Technologies.jpg" },

// ];

// const Client: React.FC = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-white py-10">
//       <h2 className="text-2xl font-semibold text-center mb-6">Our Clients</h2>
//       <div className="relative flex items-center justify-center overflow-hidden">
//         <motion.div
//           className="flex space-x-10"
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 10,
//             ease: "linear",
//           }}
//         >
//           {[...clients, ...clients].map((client, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center space-y-2 min-w-[150px]"
//             >
//               <img
//                 src={client.image}
//                 alt={client.name}
//                 className="w-24 h-24 object-contain"
//               />
//               <p className="text-gray-600 font-semibold">{client.name}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Client;


import React from "react";

const clients = [
  { name: "AVL", image: "/clients/avl1.png" },
//   { name: "Live Intent", image: "/clients/live intent.png" },
  { name: "CybordAi", image: "/clients/CybordAi.jpg" },
  { name: "Tessolve", image: "/clients/Tessolve.png" },
  { name: "MPPKVVCL", image: "/clients/MPPKVVCL.png" },
  { name: "Nikaza", image: "/clients/nikaza.png" },
  { name: "Spartans Tech", image: "/clients/Spartans-Technologies.jpg" },
];

const Client: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={client.image}
              alt={client.name}
              className="w-24 h-24 object-contain"
            />
            <p className="text-gray-600 font-semibold">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
