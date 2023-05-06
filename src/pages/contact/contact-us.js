import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/Contact.module.scss";
import Link from "next/link";
import {
  faBuilding,
  faClock,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../../components/LoadingSpinner";

emailjs.init("N_amKN9QOquvFeQUQ");

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSent(false);
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      };

      await emailjs.send("cosmas-email", "powerplay-template", templateParams);
      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
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
              <form onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.inputField}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.inputField}>
                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    className={`${styles.formControl} ${styles.formControlMessage}`}
                  ></textarea>
                </div>
                <button className={styles.sendButton} type="submit">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : isSent ? (
                    "Sent successfully"
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
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
