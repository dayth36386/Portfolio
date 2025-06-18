import React from "react";
import Head from "next/head";

import { HomePageRender } from "./features/homepage/page";

export default function page() {
  return (
    <>
      <Head>
        <title>Dechawiwatwong Detchang</title>
        <meta name="title" content="Dechawiwatwong Detchang" />
        <meta name="description" content="JUNIOR FRONTEND DEVELOPER" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <meta
          name="image"
          content="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />
        <link
          rel="image_src"
          href="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />
        <link
          rel="icon"
          href="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://porfolio-gdyo.vercel.app/" />
        <meta property="og:title" content="Dechawiwatwong Detchang" />
        <meta
          property="og:description"
          content="I'm a Junior Front-End Developer passionate about building scalable web applications..."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/ZY20Tp08/Screenshot-2568-05-06-at-09-22-34.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://porfolio-gdyo.vercel.app/"
        />
        <meta property="twitter:title" content="Dechawiwatwong Detchang" />
        <meta
          property="twitter:description"
          content="I'm a Junior Front-End Developer passionate about building scalable web applications..."
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
