import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/Contact.module.scss";
import Link from "next/link";
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
      <div className={`${styles.contactContainer} container`}>
        <div className="row">
          <div className={`${styles.leftColumn} col-lg-6`}>
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
          <div className={`${styles.socialMediaSection} col-lg-6`}>
            <div className={styles.socialMedia}>
              <h2>Info</h2>
              <div className={styles.itemEmailPhone}>
                <div className={styles.email}>
                  <Link href="mailto:ibrahim.mwakare@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
                  </Link>
                </div>
                <div className={styles.phone}>
                  <Link href="tel:+254768254608" className={styles.phoneIcon}>
                    <FontAwesomeIcon icon={faPhone} color="#FFFFFF" />
                  </Link>
                </div>
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
