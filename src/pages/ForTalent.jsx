import React from "react";

// export default function About() {
//   return (
//     <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">For Talent</h1>
//       <p className="text-lg text-gray-700 max-w-3xl">
//         Intellect Tech Solutions is a technology services company specializing in
//         digital transformation, enterprise software, and scalable IT solutions.
//       </p>
//     </div>
//   );
// }

// import React, { useState } from "react";

export default function ForTalent() {
  const [form, setForm] = useState({ name: "", email: "", skillset: "", resume: null });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setForm({ ...form, resume: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Talent form submitted:", form);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-10 rounded-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Join Our Talent Network
        </h2>
        <input
          name="name"
          placeholder="Full Name"
          className="border p-3 rounded-lg w-full mb-4"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-4"
          onChange={handleChange}
        />
        <input
          name="skillset"
          placeholder="Your Skills"
          className="border p-3 rounded-lg w-full mb-4"
          onChange={handleChange}
        />
        <input
          name="resume"
          type="file"
          className="border p-3 rounded-lg w-full mb-4"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

