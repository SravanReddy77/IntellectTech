import React, {useState} from "react";

// export default function About() {
//   return (
//     <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
//       <h1 className="text-5xl font-bold mb-6 text-blue-700">Contact Us</h1>
//       <p className="text-lg text-gray-700 max-w-3xl">
//         Intellect Tech Solutions is a technology services company specializing in
//         digital transformation, enterprise software, and scalable IT solutions.
//       </p>
//     </div>
//   );
// }



export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving contact data:", formData);
    alert("Your message has been sent!");
    // TODO: call backend API here to save in DB
  };

  return (
    <div className="px-6 py-16 bg-gray-50 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mt-4"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="border p-3 rounded-lg w-full mt-4"
          onChange={handleChange}
        />
        <select
          name="reason"
          className="border p-3 rounded-lg w-full mt-4"
          onChange={handleChange}
        >
          <option value="">Reason for Contact</option>
          <option>Business Inquiry</option>
          <option>Support</option>
          <option>Job Application</option>
          <option>Other</option>
        </select>
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

