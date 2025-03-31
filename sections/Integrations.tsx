import { Cards } from "@/components/integrations/Cards";
import { SectionTitle } from "@/components/SectionTitle";
import { integrations } from "@/constant";

export function Integrations() {
  return (
    <section className="overflow-hidden py-24">
      <div className="container grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionTitle>Integrations</SectionTitle>
          <h1 className="mt-6 text-6xl font-medium">
            Plays well with <span className="text-lime-400">Others</span>
          </h1>
          <p className="text-lg text-white/50">
            Layers seamlessly connects with your favorite tools, making it easy
            to plug into any workflow and collaborate across platforms.
          </p>
        </div>
        <div className="top-fade grid h-[25rem] gap-4 overflow-hidden max-lg:mt-8 md:grid-cols-2 lg:h-[50rem]">
          <Cards
            className=""
            integrations={[...integrations, ...integrations]}
            revDirection={false}
          />
          <Cards
            revDirection={true}
            className="hidden md:flex"
            integrations={[...integrations, ...integrations].reverse()}
          />
        </div>
      </div>
    </section>
  );
}
