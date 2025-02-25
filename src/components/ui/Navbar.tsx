"use client";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="h-24 text-white items-center absolute top-0 left-0 z-10 w-full px-5 grid grid-cols-3">
      <div></div>
      <ul className="flex gap-10 font-bold items-center text-xl justify-center">
        <li className="text-black dark:text-white">Home</li>
        <li className="text-black dark:text-white">About</li>
        <li className="text-black dark:text-white">Experience</li>
        <li className="text-black dark:text-white">Contact</li>
      </ul>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
