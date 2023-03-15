import React from "react";
import About from "./Post/About";
import Sales from "./Post/Sales";
import Properties from "./Post/Properties.jsx";
import Newsletter from "./Post/Newsletter";

const MyPosts = () => {
  return (
    <div>
      <About />
      <Sales />
      <Properties />
      <Newsletter />
    </div>
  );
};

export default MyPosts;
