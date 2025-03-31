import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { navLinks } from "@/constant";
import { logo } from "@/public/assets";

export const Navbar = () => {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 items-center rounded-full border border-white/15 px-4 py-2 md:pr-2 lg:grid-cols-3">
          <div>
            <Image src={logo} alt="Layers logo" className="w-auto max-md:h-9" />
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.href} className="">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
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
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button variant="secondary" className="hidden md:block">
              Log In
            </Button>
            <Button variant="primary" className="hidden md:block">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
