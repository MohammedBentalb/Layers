import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function FeatureCard(props: {
  children: ReactNode;
  className?: string;
  title: string;
  description: string;
}) {
  const { children, className, title, description } = props;
  return (
    <div
      className={twMerge(
        "rounded-3xl border border-white/10 bg-neutral-900 p-6 ",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h1 className="mt-6 text-3xl font-medium">{title}</h1>
        <p className="mt-2 text-white/50">{description}</p>
      </div>
    </div>
  );
}
