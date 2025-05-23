"use client";
import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Service = () => {
  return (
    <motion.div
      id="service"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I can offer a wide range of services to help you achieve your goals.
      </motion.p>
      <motion.div
        className="grid grid-cols-(--autofit-cols-200) gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="
            border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover
             hover:-translate-y-1 hover:shadow-black duration-500 dark:hover:bg-darkHover/5 dark:hover:shadow-white"
            transition={{ duration: 0.3 }}
          >
            <Image
              src={service.icon}
              width={0}
              height={0}
              alt="service-icon"
              className="w-10"
            />
            <h3 className="my-4 text-gray-700 text-lg dark:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
