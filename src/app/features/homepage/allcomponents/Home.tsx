import React from "react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InfiniteMovingIcons } from "@/components/ui/infinite-moving-icon";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconTechStack, IconTechStack2, words } from "@/data/data";

export default function Home() {
  return (
    <AuroraBackground showRadialGradient={true}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:px-20 sm:px-10 px-5 justify-center items-center"
      >
        <div>
          <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold text-Black-1 dark:text-white py-2">
            Hello, I&apos;m Dechawiwatwong Detchang
          </div>
          <TypewriterEffectSmooth
            className="flex ml-auto"
            words={words}
            cursorClassName="bg-Teal-1 text-4xl h-8 sm:h-10 lg:h-12"
          />
          <div className="grid grid-cols-2 sm:flex gap-4 sm:flex-row sm:gap-3">
            <a
              href="https://github.com/dayth36386"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#040D12_0%,#93B1A6_100%,#040D12_50%)]" />
              <span className="inline-flex h-full w-full px-5 gap-2 cursor-pointer items-center justify-center rounded-full bg-Black-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <BsGithub className="w-6 h-6" />
                <p>GitHub</p>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/dechawiwatwong-detchang-18526631a/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#040D12_0%,#93B1A6_100%,#040D12_50%)]" />
              <span className="inline-flex h-full w-full px-5 gap-2 cursor-pointer items-center justify-center rounded-full bg-Black-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <BsLinkedin className="w-6 h-6" />
                <p>LinkedIn</p>
              </span>
            </a>
            <a
              href="https://medium.com/@dechawiwatwong.d"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#040D12_0%,#93B1A6_100%,#040D12_50%)]" />
              <span className="inline-flex h-full w-full px-5 gap-2 cursor-pointer items-center justify-center rounded-full bg-Black-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <BsMedium className="w-6 h-6" />
                <p>Medium</p>
              </span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div>
            <InfiniteMovingIcons
              items={IconTechStack}
              direction="left"
              speed="normal"
            />
            <InfiniteMovingIcons
              items={IconTechStack2}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
