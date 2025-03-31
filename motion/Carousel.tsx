"use client";

import { ComponentPropsWithoutRef, ElementType } from "react";
import { motion } from "framer-motion";

export function Carousel<T extends ElementType>({
  as,
  revDirection,
  slide = false,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
  revDirection?: boolean;
  slide?: boolean;
}) {
  // @ts-expect-error err
  const Component = as ? motion[as] : motion.div;
  return (
    <Component
      {...props}
      initial={{ translateY: 0 }}
      animate={slide ? { translateX:  "-50%" } : { translateY: revDirection ? "50%" : "-50%" }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
}
