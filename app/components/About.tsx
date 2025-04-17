"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { assets, stackData } from "@/assets/assets";
import { motion } from "motion/react";

const About = () => {
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
          className="flex-1 overflow-hidden w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className=" mb-10 text-gray-700 font-Ovo dark:text-white text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <h4 className="mb-2 text-gray-700 font-Ovo dark:text-white text-2xl">
              Introduction
            </h4>
            <p className="max-w-2xl font-Ovp text-sm font-medium text-body-color dark:text-dark-6">
              I&apos;m 28 years old and from Tokyo, Japan. My hobbies include
              watching dramas, movies, and reading comics. In addition, I enjoy
              playing basketball and watching NBA games. One of my dreams is to
              go to America and watch NBA games there.
            </p>
          </motion.div>
          <motion.div
            className=" mb-6 text-gray-700 font-Ovo dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            <h4 className="mb-2 text-gray-700 font-Ovo dark:text-white text-2xl">
              Tools I use
            </h4>
            <p className="max-w-2xl font-Ovp mb-6 text-sm font-medium text-body-color dark:text-dark-6">
              I primarily use TypeScript for my web development projects. My
              go-to editor is Cursor now!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="overflow-hidden border border-gray-500 rounded-xl"
          >
            <div className="overflow-x-clip [mask-image:_linear-gradient(to_right,_transparent_0,_white_18px,white_calc(100%-18px),_transparent_100%)] py-8 px-4">
              <div className="flex flex-none gap-6 items-center animate-move-left w-max">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {stackData.map((stack, index) => (
                      <div
                        key={index}
                        className="bg-white/10 max-w-xs flex items-center gap-1 px-4 py-2 rounded-2xl"
                      >
                        <span className="w-6 h-6">
                          <Image
                            src={stack.icon}
                            width={96}
                            height={96}
                            alt={stack.title}
                          />
                        </span>
                        <span className="text-xs">{stack.title}</span>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
              <div className="mt-4 flex flex-none gap-6 items-center animate-move-right w-max">
                {[...new Array(2)].fill(0).map((_, index) => (
                  <Fragment key={index}>
                    {stackData.map((stack, index) => (
                      <div
                        key={index}
                        className="bg-white/10 max-w-xs flex items-center gap-1 px-4 py-2 rounded-2xl"
                      >
                        <span className="w-6 h-6">
                          <Image
                            src={stack.icon}
                            width={96}
                            height={96}
                            alt={stack.title}
                          />
                        </span>
                        <span className="text-xs">{stack.title}</span>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
