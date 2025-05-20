"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export default function MotionImageGrid({
  images,
  altBase,
}: {
  images: StaticImageData[];
  altBase: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={src}
            alt={`${altBase} gallery image ${idx + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
