import React from "react";
// import styles from "./style.module.css";
import Slideshow from '../components/Slideshow';

const Home = () => (
  <section className="home">
    <div>
      <Slideshow />
      <p>
        The above will be a Gallery slideshow.
      </p>
    </div>
  </section>
);

export default Home;
