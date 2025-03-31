import { navLinks } from "@/constant";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16">
      <nav className="container">
        <div className="flex items-center gap-6 max-md:flex-col md:justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="Layers logo" className="" />
          </Link>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  );
}
