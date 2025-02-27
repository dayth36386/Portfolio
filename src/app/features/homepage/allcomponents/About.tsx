import React from "react";
import { FileTextIcon } from "@radix-ui/react-icons";

import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-neutral-200 max-w-4xl text-center">
          About
        </h2>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-justify relative z-10">
          I'm a Junior Front-End Developer passionate about building scalable
          web applications with Next.js, Node.js, and MongoDB. With hands-on
          experience in UX/UI design, I've participated in startup competitions
          and IoT projects. I'm currently pursuing a Bachelor of Science and
          Technology at Kasem Bundit University (2021 - present).
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base relative z-10 text-justify">
          During my internship as a Full-Stack Developer at SSL Logistics Co.,
          Ltd., I worked on the Front-End development of a Dealer Web project,
          using Next.js, ShadCN, and Zustand. I collaborated with the UX/UI
          team, improved SEO, refactored code, and optimized performance.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-justify relative z-10">
          Always eager to learn and improve, I strive to create better user
          experiences. Let's connect!
        </p>
      </div>
      <div className="flex gap-4 relative z-10">
        <a
          href="/pdf/cv-dechawiwatwongdetchang.pdf"
          download
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#040D12_0%,#93B1A6_100%,#040D12_50%)]" />
          <span className="inline-flex h-full w-full px-5 gap-2 cursor-pointer items-center justify-center rounded-full bg-[#040D12] py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <FileTextIcon className="w-6 h-6" />
            <p>CV</p>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/dechawiwatwong-detchang-18526631a/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#040D12_0%,#93B1A6_100%,#040D12_50%)]" />
          <span className="inline-flex h-full w-full px-5 gap-2 cursor-pointer items-center justify-center rounded-full bg-[#040D12] py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <FileTextIcon className="w-6 h-6" />
            <p>Resume</p>
          </span>
        </a>
      </div>
      <BackgroundBeams />
    </div>
  );
}
