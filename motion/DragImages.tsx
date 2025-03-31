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
  return <Component drag dragSnapToOrigin {...props} />;
}
