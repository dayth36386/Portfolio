"use client";
import { useEffect, useRef, useState } from "react";

import { ModeToggle } from "./ModeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    navItems.forEach((item) => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });
  }, []);

  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const section = sectionRefs.current[id];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div className="hidden sm:block">
      <div className="h-24 text-white items-center fixed top-0 left-0 z-50 w-full px-5 lg:grid flex justify-between lg:grid-cols-3 bg-transparent backdrop-blur-md transition-colors">
        <div></div>
        <ul className="flex gap-5 lg:gap-10 font-bold items-center text-xl justify-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="text-black dark:text-white hover:text-Teal-2 dark:hover:text-Teal-3 cursor-pointer"
            >
              {mounted ? (
                <a onClick={scrollToSection(item.id)}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
