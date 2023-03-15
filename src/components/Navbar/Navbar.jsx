import React from "react";
import classes from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <FaHome className={classes.icons} />
        <a href="#" className={classes.item}>
          Home
        </a>
      </div>
      <div>
        <FaInfoCircle className={classes.icons} />
        <a href="#" className={classes.item}>
          About Us
        </a>
      </div>
      <div>
        <FaAws className={classes.icons} />
        <a href="#" className={classes.item}>
          Sales
        </a>
      </div>
      <div>
        <FaSteam className={classes.icons} />
        <a href="#" className={classes.item}>
          Properties
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
