import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import {motion} from 'motion/react'

const Services = ({ theme }) => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage and convert.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create compelling content that drives engagement and conversions.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media Management",
      description:
        "We help you manage your social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
    initial="hidden"
       whileInView="visible"
       transition={{staggerChildren: 0.2}}
       viewport={{once: true}}
      id="services"
      className={`relative flex flex-col items-center px-4 gap-10
      sm:px-12 lg:px-24 xl:px-40 pt-20 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}
    >
      <img
        src={assets.bgImage2}
        alt="Services"
        className="absolute -top-110 -left-70 -z-10 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
