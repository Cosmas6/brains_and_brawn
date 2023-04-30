import styles from "@/styles/About.module.scss";

export default function About() {
  return (
    <section className={styles.aboutContainer} id="aboutContainer">
      <h1 className={styles.aboutHeading}>
        Welcome to the Home of Dynamic Team Building!
      </h1>
      <div className={styles.bgImageContainer}></div>
      <p className={styles.aboutDescription}>
        Join us as we bring together the power of smart thinking and physical
        strength to create unforgettable experiences that strengthen bonds and
        boost morale. We're dedicated to helping teams of all sizes and
        industries build a stronger foundation, one adventure at a time.
      </p>
      <div
        className={styles.flashingArrow}
        onClick={() => {
          const targetElement = document.getElementById("eventCarousel");
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        }}
      >
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
}
