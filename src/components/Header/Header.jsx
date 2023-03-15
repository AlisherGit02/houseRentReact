import React from "react";
import classes from "./Header.module.css";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className={`${classes.nav} ${classes.container}`}>
        <a href="#" className={classes.logo}>
          <FaHome className={classes.bx} />
          Home Rent
        </a>
        <input type="checkbox" className={classes.menu} />

        <ul className={classes.navbar}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#sales">Sales</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
        </ul>
        <a href="#" className={classes.btn}>
          Log In
        </a>
      </div>
    </header>
  );
};
export default Header;
