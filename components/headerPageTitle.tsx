"use client";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";

export default function HeaderPageTitle({ pageTitle }: { pageTitle?: string }) {
  return (
    <div className="flex flex-col w-full gap-3">
      <h1 className={`${title()} text-start text-yellow-500`}>{pageTitle}</h1>
      <motion.div
        animate={{ scaleX: 1 }}
        className="h-1 bg-yellow-500 w-full rounded"
        initial={{ scaleX: 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
