import React from "react";
import s from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div>
      <section className={`${s.newsletter} ${s.container}`}>
        <h2>
          Have Question in mind? <br /> Let us help you
        </h2>
        <form action="#">
          <input
            type={"email"}
            className={s.email_box}
            placeholder="yourmail@gmail.com"
            required
          />
          <input type={"submit"} value="Send" className={s.btn} />
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
