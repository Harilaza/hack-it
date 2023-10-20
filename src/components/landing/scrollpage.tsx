import { Variants, motion } from "framer-motion";
import React from "react";

interface ScrollPageProps {
  children?: React.ReactNode;
  bg: string;
  title?: string;
}

const layoutVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

function ScrollPage({ title, bg, children }: ScrollPageProps) {
  return (
    <motion.div
      variants={layoutVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {title && <h1 style={{ color: bg }}>{title}</h1>}
      {children}
    </motion.div>
  );
}

export default ScrollPage;
