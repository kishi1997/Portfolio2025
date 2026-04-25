"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { assets, stackData } from "@/assets/assets";
import { motion } from "motion/react";

const FACTS = [
  { label: "Age", value: "28" },
  { label: "Based in", value: "Vancouver, CA" },
  { label: "Origin", value: "Tokyo, JP" },
  { label: "Status", value: "Available" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full px-6 lg:px-12 xl:px-20 py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number" aria-hidden="true">01</span>

      {/* ─── Geometric decorations ─── */}
      {/* Hexagon outline — upper right, counter-rotating */}
      <div
        className="geo-spin-rev pointer-events-none absolute hidden md:block"
        style={{ right: "3%", top: "6%" }}
        aria-hidden="true"
      >
        <svg width="130" height="150" viewBox="0 0 130 150" fill="none">
          <polygon points="65,4 122,36 122,114 65,146 8,114 8,36" stroke="var(--accent)" strokeWidth="1" opacity="0.14"/>
          <polygon points="65,22 106,44 106,106 65,128 24,106 24,44" stroke="var(--accent)" strokeWidth="0.5" opacity="0.07"/>
        </svg>
      </div>
      {/* 6×6 dot matrix — bottom right */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{ right: "3%", bottom: "6%" }}
        aria-hidden="true"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {Array.from({ length: 36 }, (_, i) => {
            const r = Math.floor(i / 6);
            const c = i % 6;
            return <circle key={i} cx={c * 22 + 7} cy={r * 22 + 7} r="1.5" fill="var(--text-muted)" opacity="0.18"/>;
          })}
        </svg>
      </div>
      {/* Floating cross with center dot — left edge */}
      <div
        className="geo-float-a pointer-events-none absolute hidden lg:block"
        style={{ left: "-10px", top: "55%" }}
        aria-hidden="true"
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <line x1="26" y1="4" x2="26" y2="48" stroke="var(--accent)" strokeWidth="1.5" opacity="0.22"/>
          <line x1="4" y1="26" x2="48" y2="26" stroke="var(--accent)" strokeWidth="1.5" opacity="0.22"/>
          <circle cx="26" cy="26" r="4" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.16"/>
        </svg>
      </div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
        <span
          className="text-xs font-Mono tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Introduction
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-Syne font-extrabold mb-16"
        style={{ color: "var(--text)" }}
      >
        About me
      </motion.h2>

      {/* Main content: image + text */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 relative"
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{ width: 300, height: 380, border: "1px solid var(--border)" }}
          >
            <Image
              src={assets.user_image}
              alt="Tomoyuki Kishi"
              width={300}
              height={380}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent border accent */}
          <div
            className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl -z-10"
            style={{ border: "1px solid var(--accent)", opacity: 0.3 }}
          />
        </motion.div>

        {/* Text + Facts + Stack */}
        <div className="flex-1 space-y-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3
              className="text-xl font-Syne font-bold mb-3"
              style={{ color: "var(--text)" }}
            >
              Who I am
            </h3>
            <p
              className="leading-relaxed text-sm max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              I&apos;m 28 years old, originally from Tokyo, Japan — now living and
              working in Vancouver, Canada. When I&apos;m not coding, I enjoy watching
              dramas, movies, and reading comics. I&apos;m a huge NBA fan, and one of my
              dreams is to watch a live game in the US someday.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-[0.6rem] font-Mono tracking-[0.15em] uppercase mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {fact.label}
                </div>
                <div
                  className="text-sm font-Syne font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {fact.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h3
              className="text-xl font-Syne font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Tools &amp; Stack
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              TypeScript is my primary language. My go-to editor is Cursor — AI-native development all the way.
            </p>

            {/* Ticker */}
            <div
              className="rounded-2xl overflow-hidden py-4"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-surface)" }}
            >
              <div
                className="overflow-x-clip"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0, white 64px, white calc(100% - 64px), transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0, white 64px, white calc(100% - 64px), transparent 100%)",
                }}
              >
                {/* Row 1: left */}
                <div className="flex gap-3 items-center animate-ticker-left w-max px-4 mb-3">
                  {[...Array(2)].map((_, i) => (
                    <Fragment key={i}>
                      {stackData.map((stack, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl whitespace-nowrap"
                          style={{
                            backgroundColor: "var(--bg-surface-2)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <span className="w-5 h-5 flex-shrink-0">
                            <Image
                              src={stack.icon}
                              width={20}
                              height={20}
                              alt={stack.title}
                              className="w-5 h-5 object-contain"
                            />
                          </span>
                          <span
                            className="text-xs font-Mono"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {stack.title}
                          </span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
                {/* Row 2: right */}
                <div className="flex gap-3 items-center animate-ticker-right w-max px-4">
                  {[...Array(2)].map((_, i) => (
                    <Fragment key={i}>
                      {stackData.map((stack, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl whitespace-nowrap"
                          style={{
                            backgroundColor: "var(--bg-surface-2)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <span className="w-5 h-5 flex-shrink-0">
                            <Image
                              src={stack.icon}
                              width={20}
                              height={20}
                              alt={stack.title}
                              className="w-5 h-5 object-contain"
                            />
                          </span>
                          <span
                            className="text-xs font-Mono"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {stack.title}
                          </span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
