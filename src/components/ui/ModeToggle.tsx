"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          {theme === "dark" ? (
            <div className="flex gap-2 font-bold">
              <p>Dark Mode</p>
              <MoonIcon className="text-yellow-500" />
            </div>
          ) : theme === "light" ? (
            <div className="flex gap-2 font-bold">
              <p className="text-black">Ligth Mode</p>
              <SunIcon className="text-yellow-500" />
            </div>
          ) : systemTheme === "dark" ? (
            <div className="flex gap-2 font-bold">
              <p>Dark Mode</p>
              <MoonIcon className="text-yellow-500" />
            </div>
          ) : (
            <div className="flex gap-2 font-bold">
              <p className="text-black">Ligth Mode</p>
              <SunIcon className="text-yellow-500" />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
