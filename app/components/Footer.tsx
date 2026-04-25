"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { HiEnvelope, HiArrowUpRight } from "react-icons/hi2";

type FooterProps = {
  isDarkMode: boolean;
};

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer
      className="w-full px-6 lg:px-12 xl:px-20 py-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Upper row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            width={130}
            height={34}
            className="h-7 w-auto"
          />
          <span
            className="text-xs font-Mono tracking-[0.15em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Crafted in Vancouver
          </span>
        </div>

        <Link
          href="mailto:bgmwork9634@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-surface)",
            color: "var(--text-muted)",
          }}
        >
          <HiEnvelope className="w-4 h-4" style={{ color: "var(--accent)" }} />
          <span className="text-xs font-Mono tracking-widest">
            bgmwork9634@gmail.com
          </span>
        </Link>
      </div>

      {/* Lower row */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="text-xs font-Mono tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          © 2025 Tomoyuki Kishi. All rights reserved.
        </p>

        <ul className="flex items-center gap-3">
          {[
            { label: "GitHub", href: process.env.NEXT_PUBLIC_MY_GITHUB_URL || "" },
            { label: "Lancers", href: process.env.NEXT_PUBLIC_MY_LANCERS_URL || "" },
          ].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-Mono tracking-widest uppercase transition-all duration-200 hover:scale-105"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--text-muted)",
                }}
              >
                {link.label}
                <HiArrowUpRight className="w-3 h-3" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
