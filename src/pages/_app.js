import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/Navbar";
import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
import "../styles/animations.scss";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(false);
  config.autoAddCss = false;
  function applySmoothScrollPolyfill() {
    if (typeof window !== "undefined") {
      const smoothscroll = require("smoothscroll-polyfill");
      smoothscroll.polyfill();
    }
  }

  useEffect(() => {
    applySmoothScrollPolyfill();
  }, []);

  return (
    <>
      <main>
        <Head>
          <title>PowerPlay</title>
          <meta
            name="description"
            content="Building Stronger Teams, One Adventure at a Time"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar setIsLoading={setIsLoading} />
        <Layout isLoading={isLoading}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
}
