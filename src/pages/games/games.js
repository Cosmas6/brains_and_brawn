import React, { useState } from "react";
import Image from "next/image";
import bucketImage from "public/images/games/green-bucket.png";
import eggSpoon from "public/images/games/egg-spoon.png";
import blindDrawing from "public/images/games/blind-drawing.png";
import blindfold from "public/images/games/blindfold.png";
import balloonWalk from "public/images/games/balloon-walk.png";
import obstacleRing from "public/images/games/obstacle-ring.png";
import stoneNumber from "public/images/games/stone-number.png";
import pingPong from "public/images/games/ping-pong.png";
import pingPongTumbler from "public/images/games/ping-pong-tumbler.png";
import sackRacing from "public/images/games/sack-racing.png";
import tugOfWar from "public/images/games/tug-of-war.png";
import numberConnect from "public/images/games/number-connect.png";
import ropeSquare from "public/images/games/rope-square.png";
import ludo from "public/images/games/ludo.png";
import checkers from "public/images/games/checkers.png";
import chess from "public/images/games/chess.png";
import snakesAndLadders from "public/images/games/snakes-and-ladders.jpg";
import darts from "public/images/games/darts.jpg";
import cards from "public/images/games/cards.png";
import slingShot from "public/images/games/sling-shot.jpg";
import jenga from "public/images/games/jenga.jpg";
import scrabble from "public/images/games/scrabble.jpg";
import styles from "./css/games.module.scss";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Games() {
  const [activeNavLink, setActiveNavLink] = useState("physical-games");

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setActiveNavLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className={styles.gamesContainer}>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <a
                href="#physical-games"
                className={`${styles.navLink} ${
                  activeNavLink === "physical-games" ? styles.active : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, "physical-games")}
              >
                Physical Games
              </a>
            </li>
            <li>
              <a
                href="#board-games"
                className={`${styles.navLink} ${
                  activeNavLink === "board-games" ? styles.active : ""
                }`}
                onClick={(e) => handleNavLinkClick(e, "board-games")}
              >
                Board Games
              </a>
            </li>
            {/* <li>
            <a
              href="#bonus-games"
              className={`${styles.navLink} ${
                activeNavLink === "bonus-games" ? styles.active : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "bonus-games")}
            >
              Bonus Games
            </a>
          </li> */}
          </ul>
        </nav>
        <div className={styles.gameSectionContainer}>
          <section id="physical-games" className={styles.gameCategory}>
            <h2 className={styles.categoryTitle}>Physical Games</h2>
            <div className={styles.gameCards}>
              <div className={styles.gameCard}>
                <Image
                  src={bucketImage}
                  className={styles.gameImage}
                  alt="Example Image"
                  objectFit="contain"
                />
                <h3 className={styles.gameTitle}>Blind Water Bucket Pass</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={eggSpoon}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Egg Spoon Balance</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={blindDrawing}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Blind Drawing</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={balloonWalk}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Balloon Walk Racing</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={obstacleRing}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Blindfolded Obstacle Ring</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={blindfold}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Blindfolded Retriever</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={stoneNumber}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Match the stone and number</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={pingPong}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>
                  Pipe Ping Pong Ball Transportation
                </h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={pingPongTumbler}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>
                  Ping Pong Water Tumbler Throw
                </h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={sackRacing}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Sack Racing</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={tugOfWar}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Tug of War</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={numberConnect}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Connect the Numbers</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={ropeSquare}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Perfect Rope Square</h3>
              </div>
            </div>
          </section>

          <section id="board-games" className={styles.gameCategory}>
            <h2 className={styles.categoryTitle}>Board Games</h2>
            <div className={styles.gameCards}>
              <div className={styles.gameCard}>
                <Image
                  src={ludo}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Ludo</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={checkers}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Checkers</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={chess}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Chess</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={snakesAndLadders}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Snakes and Ladders</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={darts}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Darts</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={cards}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Cards</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={slingShot}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Sling Shot</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={jenga}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Jenga</h3>
              </div>
              <div className={styles.gameCard}>
                <Image
                  src={scrabble}
                  className={styles.gameImage}
                  alt="Example Image"
                />
                <h3 className={styles.gameTitle}>Scrabble</h3>
              </div>
            </div>
          </section>

          {/* <section id="bonus-games" className={styles.gameCategory}>
          <h2 class="category-title">Bonus Games</h2>
          <div className={styles.gameCards}></div>
        </section> */}
        </div>
      </div>
    </motion.div>
  );
}
