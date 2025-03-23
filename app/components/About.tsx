"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

type AboutProps = {
  isDarkMode: boolean;
};

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            width={400}
            height={538}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovp">
            I am a front-end web developer who is currently based in Vancouver,
            Canada. I have a passion for creating visually stunning and
            user-friendly websites.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((info, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:border-white 
                dark:hover:shadow-white dark:hover:bg-darkHover"
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
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white">
            Tools I use
          </h4>
          <ul className="flex gap-3 sm:gap-5 items-center">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
              >
                <Image
                  src={tool}
                  width={0}
                  height={0}
                  alt="tool"
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
