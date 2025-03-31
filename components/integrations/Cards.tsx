import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { Carousel } from "@/motion/Carousel";

type CardProps = {
  className?: string;
  revDirection: boolean;
  integrations: {
    name: string;
    icon: StaticImageData;
    description: string;
  }[];
};

export function Cards(props: CardProps) {
  const { className, integrations, revDirection } = props;

  return (
    <Carousel
      revDirection={revDirection}
      className={twMerge(
        `${revDirection ? "relative -top-1/2" : ""} flex flex-none flex-col gap-4 pb-4`,
        className
      )}
      as={"div"}
    >
      {integrations.map((integration, i) => (
        <div
          key={`${integration.name}-${i} card`}
          className="rounded-3xl border border-white/10 bg-neutral-950 p-6"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={`${integration.name}-${i} icon`}
              className="size-24"
            />
          </div>
          <h2 className="mt-6 text-center text-3xl">{integration.name}</h2>
          <p className="mt-2 text-center text-white/50">
            {integration.description}
          </p>
        </div>
      ))}
    </Carousel>
  );
}
