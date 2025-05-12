import React, { useState } from "react";
import * as artworks from '../utilities/artworks.js';
import heroImgUrl from '/assets/IMG-7983.jpg';
import styles from '../routes/style.module.css';

const slideSources = [
  heroImgUrl,
  artworks.img1,
  artworks.img2
];

const slides = slideSources.map((src, key) => (
  <figure key={key} style={{position:"absolute"}}>
    <img className={styles.heroImage} style={{zIndex:-1}} src={src} alt={"Slide " + key} loading="lazy"/>
    <figcaption style={{textAlign:"center",position:"absolute",top:0}}>{`Slide ${key + 1} of ${slideSources.length}`}</figcaption>
  </figure>
))

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(slides)

  return (
    // jsx element here
    <section className="slideshow-container">
      {slides}
      <a title="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a title="next" onclick="plusSlides(1)">&#10095;</a>
    </section>
  )
}

export default Slideshow;