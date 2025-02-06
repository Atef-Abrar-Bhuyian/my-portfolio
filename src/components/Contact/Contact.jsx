import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import Globe from "globe.gl"; // Import the globe.gl library

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  useEffect(() => {
    const globeContainer = document.getElementById("globeViz");

    if (globeContainer) {
      const globe = Globe()(globeContainer)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
        .backgroundColor("rgba(0, 0, 0, 0)"); // Transparent background

      // Set explicit size to prevent overflow
      globe.width(400); // Adjust width
      globe.height(500); // Adjust height

      // Auto-rotate settings
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -0.6;

      // Disable resizing and zooming
      globe.controls().enableZoom = false;
      globe.controls().enablePan = false;
    }
  }, []);

  return (
    <div className="min-h-screen py-20 flex flex-col items-center text-white">
      <div className="mt-6">
        <Heading heading={"Contact With Me"} />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto mt-12 gap-12">
        {/* Form Section */}
        <div className="bg-gray-950 p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center text-4xl font-semibold text-gray-300">
              Send Me an Email
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                rows="4"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#ff014f] text-white rounded-md hover:bg-[#e60045] focus:outline-none focus:ring-2 focus:ring-[#ff014f] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Globe Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div id="globeViz"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
