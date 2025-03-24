"use client";
import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      id="work"
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
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my portfolio! I am a front-end web developer.
      </motion.p>
      <motion.div
        className="grid grid-cols-(--autofit-cols-200) gap-6 my-10 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            style={{ backgroundImage: `url(${work.bgImage})` }}
            className="
            aspect-square bg-no-repeat relative bg-cover bg-center group border-[0.5px] border-gray-400 
            p-6 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5
             left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{work.title}</h2>
                <p className="text-sm text-gray-700">{work.description}</p>
              </div>
              <div
                className="aspect-square border rounded-full border-black w-9 flex 
                items-center justify-center shadow-[2px_2px_0_0] group-hover:bg-yellow-300 transition"
              >
                <Image
                  src={assets.send_icon}
                  width={0}
                  height={0}
                  alt="send-icon"
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Link href="">
        <motion.div
          className="w-max mx-auto px-10 py-3 border border-white bg-black text-white rounded-full 
          flex items-center gap-2 duration-500 hover:-translate-y-1 dark:bg-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          show more
          <Image
            className="w-4"
            src={assets.right_arrow_white}
            width={0}
            height={0}
            alt="right-arrow-white"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Work;
