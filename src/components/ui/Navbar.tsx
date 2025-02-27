"use client";
import Link from "next/link";

import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="hidden sm:block">
      <div className="h-24 text-white items-center fixed top-0 left-0 z-50 w-full px-5 lg:grid flex justify-between lg:grid-cols-3 bg-transparent backdrop-blur-md transition-colors">
        <div></div>
        <ul className="flex gap-5 lg:gap-10 font-bold items-center text-xl justify-center">
          <li className="text-black dark:text-white hover:text-Teal-2 dark:hover:text-Teal-3 cursor-pointer">
            Home
            <Link href=""></Link>
          </li>
          <li className="text-black dark:text-white hover:text-Teal-2 dark:hover:text-Teal-3 cursor-pointer">
            About
          </li>
          <li className="text-black dark:text-white hover:text-Teal-2 dark:hover:text-Teal-3 cursor-pointer">
            Experience
          </li>
          <li className="text-black dark:text-white hover:text-Teal-2 dark:hover:text-Teal-3 cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
