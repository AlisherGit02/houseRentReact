import React from "react";
import s from "./Sales.module.css";
import { BiUser } from "react-icons/bi";
import { BiDesktop } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";

const Sales = () => {
  return (
    <div>
      <section className={`${s.sales} ${s.container}`}>
        <div className={s.box}>
          <BiUser className={`${s.bx} ${s.bx_user}`} />
          <h3>Make Your Dream True</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            neque.
          </p>
        </div>

        <div className={s.box}>
          <BiDesktop className={`${s.bx} ${s.bx_desktop}`} />
          <h3>Start Your Membership</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            neque.
          </p>
        </div>

        <div className={s.box}>
          <BiHomeAlt className={`${s.bx} ${s.bx_home_alt}`} />
          <h3>Enjoy Your New Home</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            neque.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sales;
