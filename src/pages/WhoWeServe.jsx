import React from "react";

// export default function About() {
//   return (
//     <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">Who We Serve</h1>
//       <p className="text-lg text-gray-700 max-w-3xl">
//         Intellect Tech Solutions is a technology services company specializing in
//         digital transformation, enterprise software, and scalable IT solutions.
//       </p>
//     </div>
//   );
// }


export default function WhoWeServe() {
  const clients = ["Healthcare", "Finance", "Retail", "Manufacturing", "Education"];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Who We Serve</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        We collaborate with organizations across industries to deliver tailored IT and staffing solutions that help them thrive in the digital era.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {clients.map((c, i) => (
          <div
            key={i}
            className="bg-white px-8 py-6 rounded-xl shadow-md text-gray-800 font-semibold hover:shadow-lg transition-all"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
