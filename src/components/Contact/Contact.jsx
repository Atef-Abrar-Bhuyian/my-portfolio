import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import Globe from "globe.gl"; // Import the globe.gl library
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const templateParams = {
      from_name: name,
      form_email: email,
      to_name: "Atef Abrar Bhuyian",
      form_message: message,
    };

    // Sene the email using Ernai2JS
    emailjs
      .send(
        import.meta.env.VITE_serviceId,
        import.meta.env.VITE_templateId,
        templateParams,
        import.meta.env.VITE_publicKey
      )
      .then((res) => {
        Swal.fire({
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out! I will get back to you as soon as possible.",
          icon: "success",
          color: "#fff",
          background: "#030712", // Dark background color
          confirmButtonColor: "#ff014f", // Custom confirm button color
        });
        e.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Message was not sent! Please Try Again.",
          icon: "error",
          color: "#fff",
          background: "#030712", // Dark background color
          confirmButtonColor: "#ff014f", // Custom confirm button color
        });
        e.target.reset();
      });
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
    <div id="contact" className="min-h-screen py-20 flex flex-col items-center text-white">
      <div className="mt-6">
        <Heading heading={"Contact With Me"} />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 mx-auto mt-12 gap-12">
        {/* Form Section */}
        <div className="bg-gray-950 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center text-4xl font-semibold text-gray-300">
              Send Me an Email
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Name<sup>*</sup>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Email<sup>*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Message<sup>*</sup>
              </label>
              <textarea
                name="message"
                id="message"
                required
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
          <div className="divider">OR</div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-gray-300 space-y-4">
            <div className="flex items-center gap-2 text-lg">
             
              <a
                href="mailto:abrarbhuyian8@gmail.com"
                className="hover:text-[#ff014f] transition"
              >
                abrarbhuyian8@gmail.com
              </a>
              <FiMail className="text-[#ff014f]" size={24} />
            </div>
            <div className="flex items-center gap-2 text-lg">
              
              <a
                href="tel:+8801576408435"
                className="hover:text-[#ff014f] transition"
              >
                +880 157 640 7435
              </a>
              <FiPhone className="text-[#ff014f]" size={24} /> /
              <FaWhatsappSquare className="text-[#ff014f]" size={28} />
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center cursor-pointer">
          <div id="globeViz"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
