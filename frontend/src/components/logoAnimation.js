import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/LogoAnimation.module.scss";
import Logo from "../../public/b&b.png";

export default function logoAnimation({ onSlideAnimationEnd }) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const logoClassName = isAnimationComplete ? styles.logoShrink : styles.logo;

  const backgroundClassName = showSlide ? styles.slideOut : styles.background;

  const handleShrinkAnimationEnd = () => {
    setShowSlide(true);
  };

  return (
    <>
      <div className={styles.logoContainer}>
        <div className={backgroundClassName}></div>
        <Image
          src={Logo}
          alt="Loading Logo"
          className={logoClassName}
          onAnimationEnd={handleShrinkAnimationEnd}
        />
      </div>
    </>
  );
}
