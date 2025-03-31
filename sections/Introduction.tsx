"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Introduction() {
  const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
  const words = text.split(" ");
  const [wordCount, setWordCount] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const count = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  useEffect(() => {
    count.on("change", (index) => {
      setWordCount(index);
    });
  });
  return (
    <section>
      <div className="container h-[200vh]" ref={ref}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center ">
          <SectionTitle>Introduction layers</SectionTitle>
          <p className="mt-9 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
            <span className="">Your creative process deserves better.</span>
            <span className="text-white/15">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={twMerge(
                    i < wordCount && "text-white",
                    "transition-colors duration-100 ease-in-out"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <br />
            <span className="w-fit text-lime-400">
              That&apos;s why we built Layers.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
