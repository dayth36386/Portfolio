"use client";
import React from "react";
import Image from "next/image";
import StackIcon from "tech-stack-icons";

import LetTrain from "../../../../public/img/92009.jpg";
import LetTrain1 from "../../../../public/img/92010.jpg";
import LetTrain2 from "../../../../public/img/92012.jpg";
import LongChud1 from "../../../../public/img/92013.jpg";
import LongChud2 from "../../../../public/img/92014.jpg";
import Uni1 from "../../../../public/img/1721873932170.jpg";
import Uni2 from "../../../../public/img/1721873982142.jpg";
import Uni3 from "../../../../public/img/1721874001444.jpg";
import Uni4 from "../../../../public/img/1721962457957.jpg";
import LetTrain3 from "../../../../public/img/figmaletTrain.png";
import LongChud from "../../../../public/img/LongChud.png";
import LongChuds from "../../../../public/img/LongChuds.png";
import Uniexample from "../../../../public/img/uniexample2.png";
import About from "./allcomponents/About";
import { Contact } from "./allcomponents/Contact";
import Home from "./allcomponents/Home";
import { Timeline } from "@/components/ui/timeline";

export function HomePageRender() {
  const data = [
    {
      title: "Nov 4, 2024 to Mar 14, 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Internship Role: Full-Stack Developer SSL Logistics Co., Ltd.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As a Full-Stack Developer intern, I was responsible for the
            Front-End development of a Dealer Web project focused on management
            solutions. I used Next.js for front-end development, ShadCN for UI
            components, and Zustand for efficient state management. I
            collaborated with the UX/UI team to design and enhance the user
            experience, ensuring the interface was responsive, intuitive, and
            user-friendly. In addition, I contributed to improving SEO to
            enhance search engine visibility and website accessibility. I also
            participated in refactoring code to improve code quality,
            restructure the project, and ensure better maintainability in the
            future. Furthermore, I integrated various features to meet client
            needs and optimized the performance of the application.
          </p>
        </div>
      ),
    },
    {
      title: "Jun 24, 2024 ",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            IoT Smart Mushroom Farm Installation Klong Pak Lak Community
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented an IoT Smart Mushroom Farm system for the Klong Pak Lak
            community as a part of my Bachelor's degree project. Developed the
            system using Arduino ESP32 and Sensor SHT45 to control various
            devices within the farm. Data from the sensors is transmitted to a
            custom-built website, integrated with LINE LIFF.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Thailand Cyber Top Talent 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Thailand Cyber Top Talent 2023
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            CTF (Capture The Flag ) challenges to by using Reverse Engineering
            ,Programming ,Web/Mobile Exploitation .etc Tool : Fire fox , Kali
            and Wire Shark etc.
          </p>
        </div>
      ),
    },
    {
      title: "Startup Thailand League 2023",
      content: (
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex justify-between">
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Startup Thailand League 2023
              </p>
              <a
                href="https://www.figma.com/design/pKFsW9SHcajQXI8vCSvaNm/LongChud?node-id=0-1&t=Rz5FkMpQHTfuEVlu-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 items-center flex gap-2"
              >
                Long Chud <StackIcon name="figma" className="w-6 h-6" />
              </a>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Long Chud Team My responsibility in the team was UX/UI design
              using Figma, and I contributed to designing a mobile application
              for selling clothes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={LongChud}
                alt="LongChud"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LongChuds}
                alt="LongChuds"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LongChud1}
                alt="LongChud1"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LongChud2}
                alt="LongChud2"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <a
                href="https://www.figma.com/design/NKkkbBunsu2GvIoLxD0qmj/Bullet-Train-Application?node-id=0-1&t=pmnTmfMlmHljuP52-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 items-center flex gap-2"
              >
                Let's Train <StackIcon name="figma" className="w-6 h-6" />
              </a>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Businesses related to mobile applications View train schedules and
              book tickets. The application is designed to be user friendly.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={LetTrain3}
                alt="LetTrain3"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LetTrain}
                alt="LetTrain"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LetTrain1}
                alt="LetTrain1"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={LetTrain2}
                alt="LetTrain2"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Startup Thailand League 2022",
      content: (
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex justify-between">
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Startup Thailand League 2022
              </p>
              <a
                href="https://www.figma.com/design/nY3NNpNCWrXnM7vPSNaxIa/UniClothesApp?node-id=0-1&t=26buDrntVblj1ZX8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 items-center flex gap-2"
              >
                Uni Clothes <StackIcon name="figma" className="w-6 h-6" />
              </a>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Uni Clothes Team Passed the university selection round to
              represent in the regional Startup competition. My responsibility
              in the team was UX/UI design using Figma, with a focus on creating
              a mobile application for selling clothes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={Uniexample}
                alt="Uni1"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Uni1}
                alt="Uni1"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Uni2}
                alt="Uni2"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Uni3}
                alt="Uni3"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={Uni4}
                alt="Uni4"
                width={1000}
                height={1000}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Home />
      <About />
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <Contact />
    </>
  );
}
