import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("h-12 rounded-full border px-6 font-medium", {
  variants: {
    variant: {
      primary: "border-lime-400 bg-lime-400 text-neutral-950",
      secondary: "border-white bg-transparent text-white",
    },
    size: {
      sm: "h-10",
    },
  },
});

export function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...restOfProps } = props;
  return (
    <button
      className={classes({ variant, className, size })}
      {...restOfProps}
    />
  );
}
