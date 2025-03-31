import { Button } from "@/components/Button";
import { Visuals } from "@/components/Visuals";

export const Hero = () => {
  return (
    <section className="py-24">
      <div className="container relative">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-bold text-neutral-950">
            ✨$7.5M seed round raised
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-6xl text-center text-6xl font-medium max-sm:text-5xl md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg items-center justify-between rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-[50px] bg-transparent px-4 outline-none"
          />
          <Button
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        {/** -----Visual Elements----- */}
        <Visuals />
      </div>
    </section>
  );
};
