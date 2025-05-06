import React from "react";
import Head from "next/head";

import { HomePageRender } from "./features/homepage/page";

export default function page() {
  return (
    <>
      <Head>
        <title>Dechawiwatwong Detchang</title>
        <meta name="title" content="Dechawiwatwong Detchang" />
        <meta
          name="description"
          content="I'm a Junior Front-End Developer passionate about building scalable web applications with Next.js, Node.js, and MongoDB. With hands-on experience in UX/UI design, I've participated in startup competitions and IoT projects. I'm currently pursuing a Bachelor of Science and Technology at Kasem Bundit University (2021 - 2025)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://porfolio-gdyo.vercel.app/" />
        <meta name="title" content="Portfolio Dechawiwatwong Detchang" />
        <meta name="description" content="JUNIOR FRONTEND DEVELOPER" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://porfolio-gdyo.vercel.app/"
        />
        <meta property="twitter:title" content="Dechawiwatwong Detchang" />
        <meta
          property="twitter:description"
          content="I'm a Junior Front-End Developer passionate about building scalable web applications with Next.js, Node.js, and MongoDB. With hands-on experience in UX/UI design, I've participated in startup competitions and IoT projects. I'm currently pursuing a Bachelor of Science and Technology at Kasem Bundit University (2021 - 2025)."
        />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />
      </Head>
      <HomePageRender />
    </>
  );
}
