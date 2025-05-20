"use client";
import { motion } from "framer-motion";

export default function MotionSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-2xl font-normal flex items-center gap-2 mb-4"
      >
        {icon} {title}
      </motion.h2>
      {children}
    </section>
  );
}
