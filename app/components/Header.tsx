"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
const Header = () => {
  return (
    <div className="h-screen w-11/12 max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          className="rounded-full w-32"
          src={assets.profile_img}
          width={158}
          height={158}
          alt="profile-img"
        />
      </div>
      {/* 自己紹介 */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Tomoyuki Kishi
        <Image
          className="rounded-full w-6"
          src={assets.hand_icon}
          width={0}
          height={0}
          alt="hand-icon"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text:[66px] font-Ovo">
        Frontend web developer based in Vancouver.
      </h1>
      <p className="max-w-2xl mx-auto front-Ovo">
        I am a front-end web developer who is currently based in Vancouver,
        Canada. I have a passion for creating visually stunning and
        user-friendly websites.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* CVボタン */}
        <Link
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white rounded-full 
          flex items-center gap-2 duration-500 hover:-translate-y-1 dark:bg-transparent"
        >
          Contact me
          <Image
            className="w-4"
            src={assets.right_arrow_white}
            width={0}
            height={0}
            alt="right-arrow-white"
          />
        </Link>
        {/* resumeダウンロードボタン */}
        <Link
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 
          duration-500 hover:-translate-y-1 bg-white dark: text-black"
        >
          My resume
          <Image
            className="w-4"
            src={assets.download_icon}
            width={0}
            height={0}
            alt="download-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
