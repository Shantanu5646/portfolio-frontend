"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  index: number;
};

export default function ProjectCard({
  name,
  description,
  image,
  tech,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg bg-white text-gray-900 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-gray-100 rounded-full border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
