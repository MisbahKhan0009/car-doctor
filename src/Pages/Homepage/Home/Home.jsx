import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import TimeAddress from "../TimeAddress/TimeAddress";
import Products from "../Products/Products";
import Teams from "../Team/Teams";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="px-32 ">
      <Banner />
      <About />
      <Services />
      <TimeAddress />
      <Products />
      <Teams />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
