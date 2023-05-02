
import React, { useState, useEffect } from "react";
import HomePage from "./home";
import Description from "./description";
import CoreValues from "./coreValues";
import styles from "../styles/Index.module.scss";
import LogoAnimation from "@/components/logoAnimation";
import About from "./about";
import EventCarousel from "./eventCarousel";

export default function Home() {
  return (
    <>
      <main className={styles.IndexContainer}>
        <HomePage />
        <About />
        <EventCarousel />
        <Description />
        <CoreValues />
      </main>
    </>
  );
}
