import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import MobileNavbar from "./ui/MobileNavbar";

export default function Navbar() {
  return (
    <header className="container select-none flex items-center justify-between mb-4 mx-auto">
      <Logo />
      <ul className="md:flex items-center justify-end gap-4 hidden">
        <li>
          <Link href={"/"} className="hover:text-muted-foreground">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:text-muted-foreground">
            About
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="hover:text-muted-foreground">
            Contact
          </Link>
        </li>
      </ul>

      <MobileNavbar />
    </header>
  );
}
