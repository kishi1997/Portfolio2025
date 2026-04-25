"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { workData } from "@/assets/assets";
import { motion } from "motion/react";
import { HiArrowUpRight } from "react-icons/hi2";

const WorkCard = ({
  work,
  index,
}: {
  work: (typeof workData)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={work.slug}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="work-card group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
          style={{
            border: "1px solid var(--border)",
            transition: "transform 0.15s ease, border-color 0.25s",
          }}
        >
          {/* Background image */}
          <Image
            src={work.bgImage}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Top-right external link pill */}
          <div
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-Mono tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
            }}
          >
            Visit
            <HiArrowUpRight className="w-3 h-3" />
          </div>

          {/* Bottom slide-up info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <div
              className="p-4 rounded-xl backdrop-blur-sm"
              style={{ backgroundColor: "rgba(5,5,14,0.85)" }}
            >
              <h3 className="font-Syne font-bold text-base text-white mb-1">
                {work.title}
              </h3>
              <p className="text-xs font-Mono text-white/70 leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section
      id="work"
      className="relative w-full px-6 lg:px-12 xl:px-20 py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number" aria-hidden="true">03</span>

      {/* ─── Geometric decorations ─── */}
      {/* Large dashed circle — right background */}
      <div
        className="geo-float-c pointer-events-none absolute hidden lg:block"
        style={{ right: "-80px", top: "15%" }}
        aria-hidden="true"
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="150" stroke="var(--accent)" strokeWidth="0.75" opacity="0.09" strokeDasharray="12 10"/>
          <circle cx="160" cy="160" r="110" stroke="var(--accent-2)" strokeWidth="0.5" opacity="0.06"/>
        </svg>
      </div>
      {/* Diamond cluster — upper left */}
      <div
        className="pointer-events-none absolute hidden sm:block"
        style={{ left: "1%", top: "10%" }}
        aria-hidden="true"
      >
        <svg width="90" height="82" viewBox="0 0 90 82" fill="none">
          <polygon points="24,4 42,24 24,44 6,24" stroke="var(--accent)" strokeWidth="1.2" opacity="0.2"/>
          <polygon points="60,10 74,26 60,42 46,26" stroke="var(--accent)" strokeWidth="1" opacity="0.15"/>
          <polygon points="44,48 54,60 44,72 34,60" stroke="var(--accent-2)" strokeWidth="1" opacity="0.18"/>
        </svg>
      </div>
      {/* Dot row — bottom center */}
      <div
        className="pointer-events-none absolute hidden md:block"
        style={{ left: "50%", bottom: "4%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <svg width="220" height="20" viewBox="0 0 220 20" fill="none">
          {Array.from({ length: 11 }, (_, i) => (
            <circle key={i} cx={i * 22 + 1} cy="10" r="1.5" fill="var(--accent)" opacity="0.22"/>
          ))}
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
          Selected work
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-Syne font-extrabold mb-4"
        style={{ color: "var(--text)" }}
      >
        Featured projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs font-Mono tracking-widest uppercase mb-16"
        style={{ color: "var(--text-muted)" }}
      >
        Hover to explore — click to visit
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.map((work, i) => (
          <WorkCard key={i} work={work} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
