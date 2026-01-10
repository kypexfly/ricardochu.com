"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RouteAnimate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
      className="min-h-screen"
      exit={{ opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ type: "just" }}
    >
      {children}
    </motion.div>
  );
}
