import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...restOfProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex size-14 items-center justify-center rounded-xl bg-neutral-300 text-xl font-medium text-neutral-900",
        className
      )}
      {...restOfProps}
    >
      {children}
    </div>
  );
}
