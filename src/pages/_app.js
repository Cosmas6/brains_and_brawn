import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
import "../styles/animations.scss";

export default function App({ Component, pageProps, router }) {
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
        <Navbar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </>
  );
}
