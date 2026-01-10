"use client";

import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";

const ScrollToTop = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const height = useRef<number>();

  useEffect(() => {
    height.current = window.innerHeight;
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const halfViewport = Number(height?.current) * 0.5;
    if (latest > halfViewport) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      animate={hidden ? "hidden" : "visible"}
      aria-label="Go to top"
      className={clsx(
        "fixed right-5 bottom-5 rounded-full border bg-secondary p-1 opacity-0"
      )}
      onClick={goToTop}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      <Icons.up />
    </motion.button>
  );
};

export default ScrollToTop;
