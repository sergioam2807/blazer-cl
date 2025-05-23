"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ListPage({
  caracteristicas,
}: {
  caracteristicas?: { title: string }[];
}) {
  return (
    <ul className="list-none pl-0 flex flex-col justify-center items-center gap-2">
      {caracteristicas?.map((caracteristica, idx) => (
        <motion.li
          key={caracteristica.title}
          className="flex items-center gap-2 mb-2 font-semibold text-md"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          viewport={{ once: true, amount: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            alt={"check"}
            className="flex-shrink-0"
            height={20}
            src={"/check-white.svg"}
            width={20}
          />
          <span>{caracteristica.title}</span>
        </motion.li>
      ))}
    </ul>
  );
}
