import Image from "next/image";
import descriptionImage from "/public/images/descriptionImage.svg";

import styles from "../styles/Description.module.scss";

export default function Description() {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={`row ${styles.containerRow}`}>
          <div className={`col-lg-6 ${styles.leftColumn}`}>
            <h1>Elevate Your Team's Performance</h1>
            <p>
              Are you looking to take your team's performance to the next level?
              PowerPlay offers a variety of proven techniques that are designed
              to help teams work more effectively together. From virtual and
              in-person activities to personalized coaching, our services are
              tailored to meet the unique needs of your team.
            </p>
          </div>
          <div className={`col-lg-6 ${styles.rightColumn}`}>
            <div className={styles.descImageContainer}>
              <Image
                src={descriptionImage}
                className={styles.descriptionImage}
                alt="B&B Description Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
