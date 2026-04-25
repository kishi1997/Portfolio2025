"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { HiArrowDown, HiArrowRight } from "react-icons/hi2";

const Header = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 px-6 lg:px-12 xl:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none blur-[120px] opacity-20"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none blur-[100px] opacity-10"
        style={{ background: "var(--accent-2)" }}
      />

      {/* ─── Geometric decorations ─── */}
      {/* Large dashed rotating ring — right side, behind profile */}
      <div
        className="geo-spin pointer-events-none absolute"
        style={{ right: "-60px", top: "5%" }}
        aria-hidden="true"
      >
        <svg width="440" height="440" viewBox="0 0 440 440" fill="none">
          <circle cx="220" cy="220" r="210" stroke="var(--accent)" strokeWidth="1" strokeDasharray="10 14" opacity="0.12"/>
          <circle cx="220" cy="220" r="165" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 18" opacity="0.07"/>
        </svg>
      </div>
      {/* Floating diamond — left middle */}
      <div
        className="geo-float-a pointer-events-none absolute hidden sm:block"
        style={{ left: "5%", top: "42%" }}
        aria-hidden="true"
      >
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
          <polygon points="34,4 64,34 34,64 4,34" stroke="var(--accent)" strokeWidth="1.5" opacity="0.22"/>
          <polygon points="34,18 50,34 34,50 18,34" stroke="var(--accent)" strokeWidth="0.75" opacity="0.11"/>
        </svg>
      </div>
      {/* Floating triangle — lower-center-left */}
      <div
        className="geo-float-c pointer-events-none absolute hidden sm:block"
        style={{ left: "26%", bottom: "16%" }}
        aria-hidden="true"
      >
        <svg width="54" height="48" viewBox="0 0 54 48" fill="none">
          <polygon points="27,3 51,45 3,45" stroke="var(--accent-2)" strokeWidth="1.5" opacity="0.2"/>
        </svg>
      </div>
      {/* 5×5 dot grid — bottom left */}
      <div
        className="pointer-events-none absolute hidden md:block"
        style={{ left: "2%", bottom: "12%" }}
        aria-hidden="true"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {Array.from({ length: 25 }, (_, i) => {
            const r = Math.floor(i / 5);
            const c = i % 5;
            return <circle key={i} cx={c * 22 + 7} cy={r * 22 + 7} r="1.5" fill="var(--accent)" opacity="0.28"/>;
          })}
        </svg>
      </div>
      {/* Cross mark — right lower */}
      <div
        className="geo-float-b pointer-events-none absolute hidden lg:block"
        style={{ right: "10%", bottom: "28%" }}
        aria-hidden="true"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <line x1="22" y1="4" x2="22" y2="40" stroke="var(--accent-2)" strokeWidth="1.5" opacity="0.28"/>
          <line x1="4" y1="22" x2="40" y2="22" stroke="var(--accent-2)" strokeWidth="1.5" opacity="0.28"/>
        </svg>
      </div>

      {/* ─── Left: Text content ─── */}
      <div className="relative z-10 flex-1 flex flex-col items-start max-w-2xl">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-surface)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse-glow"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span
            className="text-[0.65rem] font-Mono tracking-[0.2em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Name — giant editorial text */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-Syne font-extrabold leading-none tracking-tight text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]"
            style={{ color: "var(--text)" }}
          >
            TOMOYUKI
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="font-Syne font-extrabold leading-none tracking-tight text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]"
            style={{ color: "var(--accent)" }}
          >
            KISHI
          </motion.h1>
        </div>

        {/* Role tag */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-Mono text-xs tracking-[0.2em] uppercase mb-5"
          style={{ color: "var(--text-muted)" }}
        >
          Frontend Developer &nbsp;·&nbsp; Vancouver, Canada
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="leading-relaxed max-w-md mb-10 text-[0.95rem]"
          style={{ color: "var(--text-muted)" }}
        >
          I craft visually stunning digital experiences with React, Next.js,
          and TypeScript. From pixel-perfect UIs to custom WordPress themes —
          I turn ideas into products people love.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-3"
        >
          <Link href="#contact">
            <button className="btn-accent">
              Let&apos;s talk
              <HiArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
          <Link href="/resume.pdf" download>
            <button className="btn-ghost">
              My resume
              <HiArrowDown className="w-3.5 h-3.5" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ─── Right: Profile image ─── */}
      <div className="relative z-10 flex-shrink-0 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float"
        >
          <div className="ring-wrapper" style={{ width: 280, height: 280 }}>
            <div className="ring-inner">
              <Image
                src={assets.profile_img}
                alt="Tomoyuki Kishi"
                width={280}
                height={280}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="absolute -right-4 top-8 flex flex-col gap-3"
        >
          {[
            { value: "3+", label: "Years exp." },
            { value: "20+", label: "Projects" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-3 rounded-xl text-center"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="text-xl font-extrabold font-Syne leading-none"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[0.6rem] font-Mono tracking-widest uppercase mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-bounce-y absolute bottom-8 left-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-[0.6rem] font-Mono tracking-[0.2em] uppercase">
          scroll
        </span>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }}
        />
      </div>
    </section>
  );
};

export default Header;
