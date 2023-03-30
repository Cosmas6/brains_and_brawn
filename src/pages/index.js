import Head from "next/head";
import React, { useState, useEffect } from "react";
import HomePage from "./home";
import Description from "./description";
import CoreValues from "./coreValues";
import styles from "../styles/Index.module.scss";
import LogoAnimation from "@/components/logoAnimation";
import About from "./about";
import EventCarousel from "./eventCarousel";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleSlideAnimationEnd = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Head>
        <title>Brains and Brawn</title>
        <meta
          name="description"
          content="Building Stronger Teams, One Adventure at a Time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/b&b.ico" />
      </Head>
      {/* {isLoading ? (
        <LogoAnimation onSlideAnimationEnd={handleSlideAnimationEnd} />
      ) : ( */}
      <main className={styles.IndexContainer}>
        <HomePage />
        <About />
        <EventCarousel />
        <Description />
        <CoreValues />
      </main>
      {/* )} */}
    </>
  );
}
