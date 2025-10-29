import React from "react";

// export default function About() {
//   return (
//     <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">IT Services</h1>
//       <p className="text-lg text-gray-700 max-w-3xl">
//         Intellect Tech Solutions is a technology services company specializing in
//         digital transformation, enterprise software, and scalable IT solutions.
//       </p>
//     </div>
//   );
// }


export default function ITServices() {
  const services = [
    {
      title: "Software Development",
      desc: "Custom software applications tailored to your business needs.",
    },
    {
      title: "Data Analytics",
      desc: "Turning your data into actionable insights through modern analytics.",
    },
    {
      title: "Data Engineering",
      desc: "Building scalable and reliable data pipelines for your enterprise.",
    },
  ];

  return (
    <div className="px-6 py-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
        Our IT Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {s.title}
            </h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

