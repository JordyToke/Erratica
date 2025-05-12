import React from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Routes = {};

const NavBar = () => {
  return (
    <nav>
      <menu className={styles.navMenu}>
        <li>
          <NavLink to="work" className={({isActive}) => isActive ? styles.active : styles.navLink}>work</NavLink>
        </li>
        <li>
          <NavLink to="biography" className={({isActive}) => isActive ? styles.active : styles.navLink}>biography</NavLink>
        </li>
        <li>
          <NavLink to="studio" className={({isActive}) => isActive ? styles.active : styles.navLink}>studio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className={({isActive}) => isActive ? styles.active : styles.navLink}>contact</NavLink>
        </li>
      </menu>
    </nav>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.navLink}>
      {/* <svg viewBox="1 40 98 55" height="80"><use href="/assets/ERRATICA-01.svg" /></svg> */}
        <img src="assets/ERRATICA-01.svg#logo" alt="ERRATICA logo" style={{width: "200px", height: "50px"}} />
      </NavLink>
      <NavBar />
    </header>
  );
};

export default Header;
