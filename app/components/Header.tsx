"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="h-screen w-11/12 max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          className="rounded-full w-32"
          src={assets.profile_img}
          width={158}
          height={158}
          alt="profile-img"
        />
      </motion.div>
      {/* 自己紹介 */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I&apos;m Tomoyuki Kishi
        <Image
          className="rounded-full w-6"
          src={assets.hand_icon}
          width={0}
          height={0}
          alt="hand-icon"
        />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text:[66px] font-Ovo"
      >
        Frontend web developer based in Vancouver.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto front-Ovo"
      >
        I am a front-end web developer who is currently based in Vancouver,
        Canada. I have a passion for creating visually stunning and
        user-friendly websites.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* CVボタン */}
        <Link href="#contact">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="px-10 py-3 border border-white bg-black text-white rounded-full hover:-translate-y-1 duration-500
              flex items-center gap-2 dark:bg-transparent"
          >
            Contact me
            <Image
              className="w-4"
              src={assets.right_arrow_white}
              width={0}
              height={0}
              alt="right-arrow-white"
            />
          </motion.div>
        </Link>
        {/* resumeダウンロードボタン */}
        <Link href="/sample-resume.pdf" download>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full bg-white dark: text-black  hover:-translate-y-1 duration-500"
          >
            My resume
            <Image
              className="w-4"
              src={assets.download_icon}
              width={0}
              height={0}
              alt="download-icon"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
