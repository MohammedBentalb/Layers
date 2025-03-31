import { Carousel } from "@/motion/Carousel";

export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="flex overflow-hidden p-6">
        <Carousel
          slide
          className="flex flex-none gap-16 pr-16 text-7xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 ">
              <span className="text-7xl text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
