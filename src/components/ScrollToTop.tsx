"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    toTop();
    // Next may nudge scroll after paint (focus / scroll restoration)
    const frame = requestAnimationFrame(() => {
      toTop();
      requestAnimationFrame(toTop);
    });
    const timeout = window.setTimeout(toTop, 0);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
