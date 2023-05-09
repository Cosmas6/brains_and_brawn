import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ticketHero from "/public/images/ticketHeroImage.png";
import ticketEvent from "/public/images/ticketEvent.jpg";
import styles from "./css/ticketPage.module.scss";
import Modal from "./ticketModal";
import fetchFromStrapi from "../../utils/fetchFromStrapi";

const Carousel = ({ children, openModal }) => {
  const settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.customDotSize}`,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleCardClick = (title, description, imgSrc, date) => {
    openModal(title, description, imgSrc, date);
  };

  return (
    <div className="carousel-container">
      <Slider className={styles.slickSlider} {...settings}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { handleClick: handleCardClick });
        })}
      </Slider>
    </div>
  );
};

const TicketCard = ({ title, description, imgSrc, date, handleClick }) => {
  return (
    <div className={styles.card}>
      <Image
        src={imgSrc}
        alt={title}
        className={styles.cardImage}
        width={300}
        height={300}
      />
      <div className={styles.cardContent}>
        <div className={styles.textContainer}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardDate}>{date}</p>
        </div>
        <button
          className={styles.buyButton}
          onClick={() => handleClick(title, description, imgSrc, date)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetchFromStrapi("/api/events?populate=*");

  // Transform the data to match the structure that the TicketCard component is expecting
  const events = data.map((event) => ({
    id: event.id,
    title: event.attributes.Name,
    description: event.attributes.Description,
    date: event.attributes.Date,
    imgSrc: `http://localhost:1337${event.attributes.Image.data.attributes.url}`,
  }));

  return {
    props: {
      events,
    },
  };
}

export default function TicketPage({ events }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    title: "",
    description: "",
    imgSrc: "",
  });
  // ...
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = (title, description, imgSrc, date) => {
    setScrollPosition(window.scrollY);
    setTicketInfo({ title, description, imgSrc, date });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (modalOpen) {
    return (
      <>
        <Modal
          closeModal={closeModal}
          ticketInfo={ticketInfo}
          scrollPosition={scrollPosition}
        />
      </>
    );
  }
  return (
    <div className={styles.ticketPageContainer}>
      <div className={`row ${styles.halfScreenSection}`}>
        <div className={`col-lg-6 ${styles.textColumn}`}>
          <div className={styles.bigText}>
            <h1>Teamwork. Adventure. Book Now.</h1>
            <p>
              Ready to Explore? Reserve Tickets Below 🎟️ or Stay Updated on our
              Latest Events and Subscribe today!🌟
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
          <div
            className={styles.flashingArrow}
            onClick={() =>
              window.scrollTo({
                top: document.querySelector(`.${styles.ticketSection}`)
                  .offsetTop,
                behavior: "smooth",
              })
            }
          >
            <div className={styles.arrow}></div>
          </div>
        </div>
        <div className={`col-lg-6 ${styles.imageColumn}`}>
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
            <Carousel openModal={openModal}>
              {events.map((event) => (
                <TicketCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  imgSrc={event.imgSrc}
                  date={new Date(event.date).toLocaleDateString()}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
