import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    doctor: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);
    alert("Appointment Submitted!");
  };

  return (
    <div id="book-appointment" className="flex justify-center items-center min-h-screen py-28 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <select
            name="doctor"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Rajesh">Dr. Rajesh</option>
            <option value="Dr. Vaibhav">Dr. Vaibhav</option>
            <option value="Dr. Vishal">Dr. Vishal</option>
          </select>
          <textarea
            name="message"
            placeholder="Additional Message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
