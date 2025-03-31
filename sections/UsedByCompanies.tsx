import { Carousel } from "@/motion/Carousel";
import { companies } from "@/constant";
import Image from "next/image";
export const UsedByCompanies = () => {
  const items = [...companies, ...companies];
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-center text-xl text-white/50">
          Already chosen by these market leaders
        </h1>
        <div className="side-fade mt-12 flex overflow-hidden">
          <Carousel className={"flex flex-none gap-24 pr-24"} slide>
            {items.map((logo, i) => (
              <Image
                src={logo.image}
                alt={`${logo.name}-${i} logo`}
                key={`${logo.name}-${i} logo`}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
