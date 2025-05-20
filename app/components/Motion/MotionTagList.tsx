"use client";
import { motion } from "framer-motion";

export default function MotionTagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((tech) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-rose-50 text-gray-900 px-4 py-1 rounded-full text-xs font-medium"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
