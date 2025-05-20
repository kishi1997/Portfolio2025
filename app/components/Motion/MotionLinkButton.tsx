"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";

export default function MotionLinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <Link
        href={href}
        className="max-w-fit flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full
        font-Outfit transition duration-500 dark:border-white/50 hover:-translate-y-0.5 dark:text-white"
      >
        {children}
        <CiLocationArrow1 size={20} className="text-black dark:text-white" />
      </Link>
    </motion.div>
  );
}
