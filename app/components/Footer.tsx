"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

type FooterProps = {
  isDarkMode: boolean;
};

const Footer = ({ isDarkMode }: FooterProps) => {
  console.log(
    "🚀 ~ Footer ~ process.env.NEXT_PUBLIC_MY_LANCERS_URL:",
    process.env.NEXT_PUBLIC_MY_LANCERS_URL
  );
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          className="w-36 mx-auto mb-2"
          alt="logo"
          width={0}
          height={0}
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            className="w-6"
            alt="mail-icon"
            width={0}
            height={0}
          />
          <Link href="mailto:bgmwork9634@gmail">bgmwork9634@gmail.com</Link>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Tomoyuki Kishi All rights reserved.</p>
        <ul className="mt-4 sm:mt-0 flex justify-center items-center gap-4">
          <li>
            <Link
              className="hover:underline"
              target="_blank"
              href={process.env.NEXT_PUBLIC_MY_GITHUB_URL || ""}
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              target="_blank"
              href={process.env.NEXT_PUBLIC_MY_LANCERS_URL || ""}
            >
              Lancers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
