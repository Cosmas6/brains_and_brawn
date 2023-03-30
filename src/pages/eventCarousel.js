import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../styles/EventCarousel.module.scss";
import carouselImage from "public/images/aboutImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="carousel-container">
      <Slider className={styles.slickSlider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

const ImageCard = ({ title, imgSrc }) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={imgSrc} alt={title} className={styles.img} />
    </div>
  );
};

export default function EventCarousel() {
  return (
    <div className={styles.eventCarouselContainer}>
      <div className={styles.carouselText}>
        <h1>Come Explore with Our Team of Fun-Seekers!</h1>
        <p>
          We're not just a team building company, we're a community of
          adventure-seekers! Get to know us and see what makes us stand out. Our
          diverse team is made up of people just like you, who are passionate
          about having fun and building connections. Swipe through and find your
          next adventure with us!
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <Carousel>
          <ImageCard imgSrc={carouselImage} title="Image 1" />
          <ImageCard imgSrc={carouselImage} title="Image 2" />
          <ImageCard imgSrc={carouselImage} title="Image 3" />
        </Carousel>
      </div>
    </div>
  );
}
