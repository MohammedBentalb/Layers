"use client";

import { ComponentPropsWithoutRef, ElementType } from "react";
import { motion } from "framer-motion";

export function DragImages<T extends ElementType>({
  as,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, "as"> & {
  as?: T;
}) {
  // @ts-expect-error err
  const Component = as ? motion[as] : motion.div;
  const { y, x } = props;
  return (
    <Component
      {...props}
      initial={{ opacity: 0, translateX: x, translateY: y }}
      animate={{ opacity: 100, translateX: 0, translateY: 0 }}
      transition={{
        duration: 1,
      }}
      drag
      dragSnapToOrigin
      {...props}
    />
  );
}
