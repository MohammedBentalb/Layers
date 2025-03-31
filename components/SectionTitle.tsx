import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function SectionTitle(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...restOfProps } = props;
  return (
    <div
      className={twMerge(
        "w-fit mx-auto flex items-center gap-2 rounded-full border border-lime-400 px-2 py-1 uppercase text-lime-400",
        className
      )}
      {...restOfProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
