import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="px-32 ">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
