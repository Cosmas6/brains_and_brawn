import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import ticketHero from "public/images/ticketHeroImage.png";
import ticketEvent from "public/images/ticketEvent.jpg";
import { motion } from "framer-motion";
import styles from "./css/ticketPage.module.scss";

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

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div class="carousel-container">
      <Slider className={styles.slickSlider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

const TicketCard = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.card}>
      <Image src={imgSrc} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.textContainer}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <Link href="#" className={styles.buyButton}>
          Buy
        </Link>
      </div>
    </div>
  );
};

export default function TicketPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className={styles.ticketPageContainer}>
        <div className={`row ${styles.halfScreenSection}`}>
          <div className={`col-lg-6 ${styles.fullHeightColumn}`}>
            <div className={styles.bigText}>
              <h1>Teamwork. Adventure. Book Now.</h1>
              <p>
                Ready to Explore? Reserve Tickets Below 🎟️ or Stay Updated on
                Events and Subscribe today!🌟
              </p>
            </div>

            <div className={styles.subscribeEmail}>
              <label htmlFor="emailInput" className={styles.emailInputLabel}>
                <input
                  type="email"
                  placeholder="Please Enter Email address"
                  className={styles.emailInput}
                />
              </label>
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.fullHeightColumn}`}>
            <div className={styles.parallaxImageContainer}>
              <Image
                src={ticketHero}
                className={styles.parallaxImage}
                alt="Example Image"
              />
            </div>
          </div>
        </div>
        <section className={styles.ticketSection}>
          <div className={`container ${styles.ticketHeading}`}>
            <h2>Our Exclusive Tickets</h2>
          </div>
          <div className={`container ${styles.CardsWrapper}`}>
            <div className={` ${styles.ticketCards}`}>
              <Carousel>
                <TicketCard
                  title="Ticket 1"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
                <TicketCard
                  title="Ticket 2"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
                <TicketCard
                  title="Ticket 3"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
                <TicketCard
                  title="Ticket 4"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
                <TicketCard
                  title="Ticket 5"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
                <TicketCard
                  title="Ticket 6"
                  description="Sample description"
                  imgSrc={ticketEvent}
                />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
