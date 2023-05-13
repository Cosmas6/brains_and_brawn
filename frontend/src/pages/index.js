import React from "react";
import HomePage from "./home";
import Description from "./description";
import CoreValues from "./coreValues";
import styles from "../styles/Index.module.scss";
import About from "./about";
import EventCarousel from "./eventCarousel";
import TestComponent from "../utils/testComponent";

export default function Home() {
  return (
    <>
      <main className={styles.IndexContainer}>
        <HomePage />
        {/* <TestComponent /> */}
        <About />
        <EventCarousel />
        <Description />
        <CoreValues />
      </main>
    </>
  );
}
