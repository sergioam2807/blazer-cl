"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/logos/icafal.svg",
  "/logos/alborada.jpg",
  "/logos/ingevec.svg",
  "/logos/bi.png",
  "/logos/inpromec.png",
  "/logos/noval.jpg",
  "/logos/guzmanylarrain.png",
  "/logos/CVP.jpg",
  "/logos/desco.png",
];

export default function InfiniteSlider() {
  return (
    <div className="overflow-hidden bg-white w-full text-center py-12 sm:bg-black">
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="text-black font-bold mb-16 text-3xl sm:text-3xl sm:mb-28 sm:text-white"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Nuestros Clientes
      </motion.p>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        className="flex gap-6 w-max mb-12 sm:mb-16"
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...clients, ...clients].map((src, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <Image
              alt={`Logo ${idx}`}
              className="h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300 sm:invert"
              height={100}
              src={src}
              width={100}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
