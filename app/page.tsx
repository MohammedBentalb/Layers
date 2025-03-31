import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Introduction } from "@/sections/Introduction";
import { UsedByCompanies } from "@/sections/UsedByCompanies";
import { Features } from "@/sections/Features";
import { Integrations } from "@/sections/Integrations";
import { Questions } from "@/sections/Questions";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UsedByCompanies />
      <Introduction />
      <Features />
      <Integrations />
      <Questions />
      <CallToAction />
      <Footer />
    </>
  );
}
