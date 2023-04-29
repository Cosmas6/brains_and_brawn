import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import logoImage from "public/PowerPlay.png";
import homeImage from "public/images/homeImage.png";
import eventImage from "public/images/eventImage.png";
import aboutNavImage from "public/images/aboutNavImage.jpg";
import contactImage from "public/images/contactImage.png";
import styles from "./css/Navbar.module.scss";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleNavHover = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  const circleClasses = isExpanded
    ? `${styles.circle} ${styles.expanded}`
    : styles.circle;

  const hamburgerClasses = isExpanded
    ? `${styles.hamburger} ${styles.expanded}`
    : styles.hamburger;

  return (
    <div className={styles.container}>
      <div className={circleClasses}>
        <div className={hamburgerClasses} onClick={handleClick}>
          <div className={styles.linesWrapper}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        <Image src={logoImage} className={styles.logo} alt="B&B Logo" />
        <ul className={styles.navigationList}>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleNavHover(homeImage)}
            onMouseLeave={() => handleNavHover("")}
          >
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleNavHover(eventImage)}
            onMouseLeave={() => handleNavHover("")}
          >
            <Link href="/tickets/ticketPage" onClick={handleLinkClick}>
              Event Tickets
            </Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleNavHover(aboutNavImage)}
            onMouseLeave={() => handleNavHover("")}
          >
            <Link href="/games/games" onClick={handleLinkClick}>
              Games
            </Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleNavHover(contactImage)}
            onMouseLeave={() => handleNavHover("")}
          >
            <Link href="/contact/contact-us" onClick={handleLinkClick}>
              Get in touch
            </Link>
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <Image src={currentImage} alt="" />
        </div>

        <div className={styles.socialLinks}>
          <FontAwesomeIcon
            icon={faFacebook}
            color="#147c14"
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#147c14"
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            color="#147c14"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}
