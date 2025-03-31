"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SectionTitle } from "@/components/SectionTitle";
import Answers from "@/components/Answers";
import { FQAs } from "@/constant";

export function Questions() {
  const [selectedFAQs, setSelectedFAQs] = useState(0);
  return (
    <section className="py-24">
      <div className="container">
        <SectionTitle>Faqs</SectionTitle>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Questions? We&apos;ve got{" "}
          <span className="text-lime-400">answers</span>
        </h2>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {FQAs.map((faq, i) => (
            <div
              key={i}
              className="space-y-6 rounded-2xl border border-white/15 bg-neutral-900 p-6"
              onClick={() => setSelectedFAQs(i)}
            >
              <div className="flex justify-between">
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "shrink-0 text-lime-400 transition-all duration-300 ease-linear",
                    selectedFAQs === i && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <Answers
                answer={faq.answer}
                index={i}
                selectedFAQs={selectedFAQs}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
