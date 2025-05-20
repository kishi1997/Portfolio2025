"use client";
import { motion } from "framer-motion";
import { HTMLAttributes, ElementType } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

export default function MotionText({
  as: Component = "p",
  children,
  ...props
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <Component {...props}>{children}</Component>
    </motion.div>
  );
}
