import React from "react";

// export default function Carrers() {
//   return (
//     <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">Careers</h1>
//       <p className="text-lg text-gray-700 max-w-3xl">
//         Intellect Tech Solutions is a technology services company specializing in
//         digital transformation, enterprise software, and scalable IT solutions.
//       </p>
//     </div>
//   );
// }


export default function Careers() {
  const jobs = [
    { title: "Software Engineer", location: "Remote", type: "Full-Time" },
    { title: "Data Analyst", location: "Texas, USA", type: "Full-Time" },
    { title: "React Developer", location: "Remote", type: "Contract" },
  ];

  return (
    <div className="px-8 py-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Current Openings
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {job.title}
            </h3>
            <p className="text-gray-500 mt-2">
              {job.location} | {job.type}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
