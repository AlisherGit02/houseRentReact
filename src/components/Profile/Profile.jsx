import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Footer from "../Footer/Footer";

const Profile = () => {
  return (
    <div>
      <section className={`${s.home} ${s.container}`}>
        <div className={s.home_text}>
          <h1>
            Find Your Next <br></br>Perfect Place To <br></br>Live.
          </h1>
          <a href="#" className={s.btn}>
            Sign Up
          </a>
        </div>
      </section>
      <MyPosts />
      <Footer />
    </div>
  );
};

export default Profile;
