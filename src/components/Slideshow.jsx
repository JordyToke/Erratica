import React, { useEffect, useState } from "react";
import * as artworks from "../utilities/artworks.js";
import heroImgUrl from "/assets/IMG-7983.jpg";
import styles from "./slideshow.module.css";

const slideSources = [
  {
    src: heroImgUrl,
    alt: "Gallery Hero Image",
  },
  {
    src: artworks.img1,
    alt: "Work 1",
  },
  {
    src: artworks.img2,
    alt: "Work 2",
  },
];

const Slides = ({ currSlide }) => {
  const slides = slideSources.map((slide, key) => (
    <figure className={styles.slide} key={key} style={{ zIndex: -1, position: "relative", display: key == currSlide ? "block" : "none" }}>
      <img className={styles.slideImage} src={slide.src} alt={slide.alt} loading="lazy" />
      <figcaption style={{ textAlign: "center", position: "absolute", bottom: 0, width: "100%" }}></figcaption>
    </figure>
  ));

  return slides;
};

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalTime, setIntervalTime] = useState(3000);

  useEffect(() => {
    if (intervalTime > 0) {
      const interval = setInterval(() => {
        // increment current slide after 3 seconds
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideSources.length);
      }, intervalTime);

      console.log(currentSlide);

      // remove timers
      return () => clearInterval(interval);
    }
  }, [currentSlide, intervalTime]);

  return (
    // jsx element here
    <section className={styles.slideContainer} style={{ position: "relative" }}>
      <Slides currSlide={currentSlide} />
      {/* Previous and Next buttons */}
      <a
        className={styles.arrow}
        style={{ left: 0 }}
        title="previous"
        onClick={() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
          setIntervalTime(0);
        }}>
        &#10094;
      </a>
      <a className={styles.arrow} style={{ right: 0 }} title="next" onClick={() => {
        setCurrentSlide((prevSlide) => (prevSlide + slideSources.length + 1) % 3);
        setIntervalTime(0);
        }
      }>
        &#10095;
      </a>
    </section>
  );
};

export default Slideshow;
