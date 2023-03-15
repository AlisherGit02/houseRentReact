import React from "react";
import classes from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <section className={classes.footer}>
        <div className={`${classes.footer_container} ${classes.container}`}>
          <h2>Home Rent</h2>
          <div className={classes.footer_box}>
            <h3>Quick Links</h3>
            <a href="#">Agency</a>
            <a href="#">Building</a>
            <a href="#">Rates</a>
          </div>
          <div className={classes.footer_box}>
            <h3>Locations</h3>
            <a href="#">Birmingham</a>
            <a href="#">London</a>
            <a href="#">New York</a>
          </div>
          <div className={classes.footer_box}>
            <h3>Contact</h3>
            <a href="#">+7 705 369 97 00</a>
            <a href="#">youremail@gmail.com</a>
            <div className={classes.social}>
              <a href="#">
                <BsFacebook />
              </a>

              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.copyright}>
        <p>&#169; All Right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
