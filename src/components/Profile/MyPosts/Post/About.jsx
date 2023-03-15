import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div>
      <section className={`${s.about} ${s.container}`}>
        <div className={s.about_img}>
          <img src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className={s.about_text}>
          <span>About Us</span>
          <h2>
            We Provide The Best <br />
            Property For You !
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            sint? Voluptas error sapiente necessitatibus harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quibusdam atque saepe facilis amet asperiores!
          </p>
          <p>Lorem ipsum consectetur adipisicing elit. Minima, suscipit.</p>
          <a href="#" className={s.btn}>
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
