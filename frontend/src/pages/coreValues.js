import Image from "next/image";
import coreImage from "../../public/images/coreImage.png";
import styles from "../styles/CoreValues.module.scss";

export default function CoreValues() {
  return (
    <div className={styles.coreContainer}>
      <div className={styles.header}>
        <h1>Our Core Values</h1>
      </div>
      <div className={styles.excellence}>
        <h1>Excellence</h1>
        <p>
          We challenge and motivate each other to do our best work, striving for
          excellence as a team.
        </p>
      </div>
      <div className={styles.collaboration}>
        <h1>Collaboration</h1>
        <p>
          We believe in the power of working together, sharing knowledge and
          skills, and supporting each other to achieve common goals
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={coreImage}
          className={styles.coreImage}
          alt="B&B Core Values Image"
        />
      </div>
      <div className={styles.innovation}>
        <h1>Innovation</h1>
        <p>
          We encourage each other to think creatively and generate new ideas
          together.
        </p>
      </div>
      <div className={styles.agility}>
        <h1>Agility</h1>
        <p>
          We remain flexible and adaptable, working together to respond to
          challenges and changes in the market and in our work, to emerge
          stronger as a team.
        </p>
      </div>
    </div>
  );
}
