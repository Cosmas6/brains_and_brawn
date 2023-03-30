import "@/styles/globals.scss";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
import "../styles/animations.scss";

export default function App({ Component, pageProps, router }) {
  config.autoAddCss = false;
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
