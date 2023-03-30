import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/Contact.module.scss";
import {
  faBuilding,
  faClock,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.heroBackground}>
        <h2>Contact Us</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className={`${styles.leftColumn} col-md-6`}>
            <div className={styles.contactForm}>
              <p>Feel free to contact us with any questions or concerns.</p>

              <div className={styles.inputField}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className={styles.formControl}
                />
              </div>
              <div className={styles.inputField}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className={styles.formControl}
                />
              </div>
              <div className={styles.inputField}>
                <textarea
                  type="text"
                  placeholder="Message"
                  required
                  className={`${styles.formControl} ${styles.formControlMessage}`}
                ></textarea>
              </div>
              <button className={styles.sendButton}>Send</button>
            </div>
          </div>
          <div className={`${styles.socialMediaSection} col-md-6`}>
            <div className={styles.socialMedia}>
              <h2>Info</h2>
              <div className={styles.socialMediaItem}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#FFFFFF"
                  className={styles.icon}
                />
                <p className={styles.socialMediaText}>example@example.com</p>
              </div>
              <div className={styles.socialMediaItem}>
                <FontAwesomeIcon
                  icon={faPhone}
                  color="#FFFFFF"
                  className={styles.icon}
                />
                <p className={styles.socialMediaText}>+1 (123) 456-7890</p>
              </div>
              <div className={styles.socialMediaItem}>
                <FontAwesomeIcon
                  icon={faBuilding}
                  color="#FFFFFF"
                  className={styles.icon}
                />
                <p className={styles.socialMediaText}>
                  123 Main St, City, State
                </p>
              </div>
              <div className={styles.socialMediaItem}>
                <FontAwesomeIcon
                  icon={faClock}
                  color="#FFFFFF"
                  className={styles.icon}
                />
                <p className={styles.socialMediaText}>Mon - Fri: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
