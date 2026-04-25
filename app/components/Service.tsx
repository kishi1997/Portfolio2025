"use client";
import React from "react";
import Image from "next/image";
import { serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi2";

const Service = () => {
  return (
    <section
      id="service"
      className="relative w-full px-6 lg:px-12 xl:px-20 py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number" aria-hidden="true">02</span>

      {/* ─── Geometric decorations ─── */}
      {/* 6-arm asterisk — upper right, slow rotation */}
      <div
        className="geo-spin pointer-events-none absolute hidden md:block"
        style={{ right: "4%", top: "12%" }}
        aria-hidden="true"
      >
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
          {[0, 30, 60, 90, 120, 150].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={55 - 46 * Math.cos(rad)}
                y1={55 - 46 * Math.sin(rad)}
                x2={55 + 46 * Math.cos(rad)}
                y2={55 + 46 * Math.sin(rad)}
                stroke="var(--accent)"
                strokeWidth="1"
                opacity="0.15"
              />
            );
          })}
          <circle cx="55" cy="55" r="6" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.12"/>
        </svg>
      </div>
      {/* Concentric dashed circles — bottom left, counter-rotating */}
      <div
        className="geo-spin-rev pointer-events-none absolute hidden md:block"
        style={{ left: "-30px", bottom: "8%" }}
        aria-hidden="true"
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="84" stroke="var(--accent)" strokeWidth="0.75" opacity="0.09" strokeDasharray="6 9"/>
          <circle cx="90" cy="90" r="62" stroke="var(--accent)" strokeWidth="0.75" opacity="0.07" strokeDasharray="4 11"/>
          <circle cx="90" cy="90" r="38" stroke="var(--accent)" strokeWidth="0.75" opacity="0.06"/>
          <circle cx="90" cy="90" r="14" stroke="var(--accent)" strokeWidth="0.75" opacity="0.05"/>
        </svg>
      </div>
      {/* Small floating diamond — upper center */}
      <div
        className="geo-float-b pointer-events-none absolute hidden sm:block"
        style={{ left: "46%", top: "8%" }}
        aria-hidden="true"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 38,20 20,38 2,20" stroke="var(--accent-2)" strokeWidth="1.5" opacity="0.2"/>
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
          Expertise
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
        What I do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceData.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover p-8 rounded-2xl flex flex-col gap-5"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Card header: icon + number */}
            <div className="flex items-start justify-between">
              <div className="icon-circle">
                <Image
                  src={service.icon}
                  width={24}
                  height={24}
                  alt={service.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span
                className="text-xs font-Mono tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                0{i + 1}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-Syne font-bold"
              style={{ color: "var(--text)" }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed flex-1"
              style={{ color: "var(--text-muted)" }}
            >
              {service.description}
            </p>

            {/* Footer decoration */}
            <div
              className="flex items-center gap-2 text-xs font-Mono tracking-widest uppercase mt-auto"
              style={{ color: "var(--accent)" }}
            >
              <span>Learn more</span>
              <HiArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
