import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Avatars(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...restOdProps } = props;
  return (
    <div
      className={twMerge(
        "size-20 max-[320px]:size-16 overflow-clip border-4 border-blue-400 rounded-full p-1 bg-neutral-950",
        className
      )}
      {...restOdProps}
    >
      {children}
    </div>
  );
}
