import React from "react";

interface ScrollPageProps {
  children?: React.ReactNode;
  bg: string;
  title?: string;
}

function ScrollPage({ title, bg, children }: ScrollPageProps) {
  return (
    <div
      style={{
        // backgroundColor: bg,
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {title && <h1 style={{ color: bg }}>{title}</h1>}
      {children}
    </div>
  );
}

export default ScrollPage;
