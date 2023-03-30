import { useState } from "react";
import styles from "../styles/GameNavigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import PhysicalGames from "@/pages/games/physicalGames";

export default function GameNavigation() {
  const [activeComponent, setActiveComponent] = useState(1);

  return (
    <div className={styles.navComponent}>
      <nav className={styles.navigation}>
        <button
          className={` ${
            activeComponent === 1 ? styles.navBtnActive : styles.navBtn
          }`}
          onClick={() => setActiveComponent(1)}
        >
          <span>Physical Games</span>
        </button>
        <button
          className={` ${
            activeComponent === 2 ? styles.navBtnActive : styles.navBtn
          }`}
          onClick={() => setActiveComponent(2)}
        >
          <span>Board Games</span>
        </button>
        <button
          className={` ${
            activeComponent === 3 ? styles.navBtnActive : styles.navBtn
          }`}
          onClick={() => setActiveComponent(3)}
        >
          <span>Bonus Games</span>
        </button>
      </nav>

      {activeComponent === 1 && (
        <div className={styles.component}>
          <PhysicalGames />
        </div>
      )}
      {activeComponent === 2 && (
        <div className={styles.component}>Component 2 Content</div>
      )}
      {activeComponent === 3 && (
        <div className={styles.component}>Component 3 Content</div>
      )}
    </div>
  );
}
