import Image from "next/image";
import { Avatars } from "@/components/features/Avatars";
import { FeatureCard } from "@/components/features/FeatureCard";
import { Key } from "@/components/features/Key";
import { SectionTitle } from "@/components/SectionTitle";
import { features } from "@/constant";
import { avatar1, avatar2, avatar3, avatar4 } from "@/public/assets";

export function Features() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container">
        <SectionTitle>Features</SectionTitle>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <FeatureCard
            title={"Real-time Collaboration"}
            description={
              "Work together seamless with conflict-free team editing"
            }
            className="group col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <Avatars className="z-40">
                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
              </Avatars>
              <Avatars className="z-30 -ml-6 border-indigo-500">
                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
              </Avatars>
              <Avatars className="z-20 -ml-6 border-amber-500">
                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
              </Avatars>
              <Avatars className="relative -ml-6 border-transparent bg-transparent transition group-hover:border-green-500 group-hover:bg-black">
                <Image
                  src={avatar4}
                  alt="avatar 4"
                  className="absolute inset-0 scale-90 rounded-full opacity-0  transition group-hover:opacity-100"
                />
                <div className="inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex size-1.5 rounded-full bg-white"
                    ></span>
                  ))}
                </div>
              </Avatars>
            </div>
          </FeatureCard>
          <FeatureCard
            title={"Interactive Prototyping"}
            description={
              "Engage tour clients prototypes that react to user actions"
            }
            className="group col-span-2 lg:col-span-1"
          >
            <div className="relative flex aspect-video items-center justify-center">
              <p className="max-w-[19.5rem] text-center text-4xl font-extrabold text-white/30 transition group-hover:text-white">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "}
                growth this year
              </p>
              <video
                src="/assets/images/gif-incredible.mp4"
                autoPlay
                loop
                muted
                className="pointer-events-none absolute top-0  rounded-2xl opacity-0 shadow-lg transition group-hover:opacity-50"
              />
            </div>
          </FeatureCard>
          <FeatureCard
            title={"Keyboard Quick Actions"}
            description={
              "Powerful commands to help you create designs more quickly"
            }
            className=" group col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="flex aspect-video items-center justify-center gap-4">
              <Key className="group-hover:clickEffect w-28 outline outline-transparent transition-all duration-100 ease-linear">
                shift
              </Key>
              <Key className="group-hover:clickEffect outline outline-transparent transition-all delay-150 duration-100 ease-linear">
                alt
              </Key>
              <Key className="group-hover:clickEffect outline outline-transparent transition-all delay-200 duration-100 ease-linear">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 transition-all duration-150 ease-linear hover:scale-105 md:px-5 md:text-lg"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-900 transition-all duration-150 ease-linear group-hover:rotate-[60deg]">
                &#10038;
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
