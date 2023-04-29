import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import logoImage from "public/images/PowerPlayLogo.png";

export default function Home() {
  const countdownTimerRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [screenSize, setScreenSize] = useState(1);
  console.log(screenSize);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
  };

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const smallestDimension = Math.min(screenWidth, screenHeight);
      const screenSize = smallestDimension / 1000; // Divide by 1000 to get a value between 0 and 1
      setScreenSize(screenSize);
    }

    // Add an event listener to update the screenSize variable when the screen size changes
    window.addEventListener("resize", handleResize);

    // Call the handleResize function once to initialize the screenSize variable
    handleResize();

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  const [timeValues, setTimeValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    daysPercentage: 0,
    hoursPercentage: 0,
    minutesPercentage: 0,
    secondsPercentage: 0,
  });

  function createCircularProgressBar(percentage, unit, value, screenSize) {
    const maxRadius = 60;
    const minRadius = 30;
    const radius = Math.max(minRadius, maxRadius * screenSize);
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - percentage);

    return (
      <svg width="180" height="180" viewBox="0 -50 50 150">
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#eee"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#faf30c"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90, 25, 25)`}
          fill="none"
        />
        <text
          x="25"
          y="15"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="22"
        >
          {value}
        </text>
        <text
          x="25"
          y="40"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="18"
        >
          {unit}
        </text>
      </svg>
    );
  }

  function updateCountdown() {
    const eventDate = new Date("2023-04-29 23:59:59"); // replace with your event date
    const currentDate = new Date();
    const difference = eventDate.getTime() - currentDate.getTime();
    const totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (difference <= 0) {
      clearInterval(interval);
      countdownTimer.innerHTML = "Event has started!";
      return;
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    const daysPercentage = 1 - days / totalDays;
    const hoursPercentage = 1 - hours / 24;
    const minutesPercentage = 1 - minutes / 60;
    const secondsPercentage = 1 - seconds / 60;

    setTimeValues({
      days,
      hours,
      minutes,
      seconds,
      daysPercentage,
      hoursPercentage,
      minutesPercentage,
      secondsPercentage,
    });
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    const interval = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);

    return interval;
  }

  function useCountdown() {
    const { interval } = useInterval(updateCountdown, 1000);
  }

  useCountdown();

  const smoothScrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      className={styles.heroContainer}
    >
      <div className={styles.textContainer}>
        <div className={styles.logoImageContainer}>
          <Image
            src={logoImage}
            className={styles.logoImage}
            alt="B&B Description Image"
          />
        </div>
        {/* <h2 className={styles.subHeading}>
          Building Stronger Bonds and Boosting Productivity
        </h2> */}
        <h2 className={styles.eventName}>[Latest Event Name:]</h2>
        <div
          id="countdown-timer"
          ref={countdownTimerRef}
          className={styles.countdownTimer}
        >
          <div className={screenSize <= 0.7 ? "" : styles.topRow}>
            {createCircularProgressBar(
              1 - timeValues.daysPercentage,
              "D",
              timeValues.days,
              screenSize
            )}
          </div>
          <div className={styles.divider}>|</div>
          <div className={screenSize <= 0.7 ? "" : styles.topRow}>
            {createCircularProgressBar(
              1 - timeValues.hoursPercentage,
              "H",
              timeValues.hours,
              screenSize
            )}
          </div>
          <div className={styles.divider}>|</div>
          <div className={screenSize <= 0.7 ? "" : styles.bottomRow}>
            {createCircularProgressBar(
              1 - timeValues.minutesPercentage,
              "M",
              timeValues.minutes,
              screenSize
            )}
          </div>
          <div className={styles.divider}>|</div>
          <div className={screenSize <= 0.7 ? "" : styles.bottomRow}>
            {createCircularProgressBar(
              1 - timeValues.secondsPercentage,
              "S",
              timeValues.seconds,
              screenSize
            )}
          </div>
        </div>
        <div className={styles.ctaButton}>
          <Link href="/tickets/ticketPage" onClick={handleClick}>
            {isLoading ? (
              // Render the loading spinner component when isLoading is true
              <LoadingSpinner />
            ) : (
              "Buy Tickets"
            )}
          </Link>
        </div>
        <div className={styles.learnMoreContainer}>
          <div
            className={styles.learnMore}
            tabIndex="0"
            role="link"
            onClick={() => {
              smoothScrollTo("#aboutContainer");
            }}
          >
            <div className={styles.text}>Learn More</div>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
