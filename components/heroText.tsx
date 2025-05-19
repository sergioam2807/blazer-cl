"use client";
import { motion } from "framer-motion";

export default function FadeInSection() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="text-start text-3xl font-bold mt-8"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Soluciones <br /> seguras para grandes alturas y <br />
      proyectos exigentes
    </motion.div>
  );
}

export function SubText() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="text-start text-2xl font-bold mt-8"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Confía en nuestra experiencia en andamios, perforaciones y transporte.
      </motion.h2>
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-2xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Servicios rápidos, seguros y a medida de tu obra.
      </motion.h2>
    </div>
  );
}
