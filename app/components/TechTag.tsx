// src/components/ui/TechTag.tsx
"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  techName: string;
}

const tagVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const TechTag: React.FC<TechTagProps> = ({ techName }) => {
  return (
    <motion.span
      // 背景色・文字色を調整 (仮の色、CSS変数での定義推奨)
      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium font-sans px-3 py-1 rounded-full shadow-sm" // font-sans を明示的に指定
      variants={tagVariants}
    >
      {techName}
    </motion.span>
  );
};

export default TechTag;
