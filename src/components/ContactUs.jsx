import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = ({ theme }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "11d619f3-333c-40f6-b5aa-8d8af36249fe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
      id="contact-us"
      className={`flex flex-col items-center gap-7 px-4 sm:px-12 py-40
    lg:px-24 xl:px-40 pt-40 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"
        }`}
    >
      <Title
        title="Reach out to us"
        desc="Ready to grow your brand? Let's connect and build something exceptional together."
      />

      <motion.form
       initial={{opacity:0, y: 30}}
       whileInView={{opacity:1, y: 0}}
       transition={{duration: 0.5, delay: 0.4}}
       viewport={{once: true}}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div
            className={`flex pl-3 rounded-lg border ${theme === "dark" ? "border-gray-600 bg-gray-800" : "border-gray-300"}`}
          >
            <img
              src={assets.person_icon}
              alt=""
              className={theme === "dark" ? "invert" : ""}
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`w-full p-3 text-sm outline-none bg-transparent ${theme === "dark" ? "text-white placeholder-gray-400" : ""}`}
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div
            className={`flex pl-3 rounded-lg border ${theme === "dark" ? "border-gray-600 bg-gray-800" : "border-gray-300"}`}
          >
            <img
              src={assets.email_icon}
              alt=""
              className={theme === "dark" ? "invert" : ""}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full p-3 text-sm outline-none bg-transparent ${theme === "dark" ? "text-white placeholder-gray-400" : ""}`}
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            required
            className={`w-full p-3 text-sm outline-none rounded-lg border ${theme === "dark" ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400" : "border-gray-300"}`}
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white 
        text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Submit{" "}
          <img
            src={assets.arrow_icon}
            alt=""
            className={`w-4 ${theme === "dark" ? "invert" : ""}`}
          />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
