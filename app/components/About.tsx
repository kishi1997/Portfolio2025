"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

type AboutProps = {
  isDarkMode: boolean;
};

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <motion.div
      id="about"
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
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            width={400}
            height={538}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-Ovp">
            I am a front-end web developer who is currently based in Vancouver,
            Canada. I have a passion for creating visually stunning and
            user-friendly websites.
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {infoList.map((info, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:border-white 
                dark:hover:shadow-white dark:hover:bg-darkHover/15"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={isDarkMode ? info.iconDark : info.icon}
                  width={0}
                  height={0}
                  alt={info.title}
                  className="w-6"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  {info.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            className="my-6 text-gray-700 font-Ovo dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className="flex gap-3 sm:gap-5 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={tool}
                  width={0}
                  height={0}
                  alt="tool"
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
