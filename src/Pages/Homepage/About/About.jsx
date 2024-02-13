import React from "react";
import parts from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/about_us/parts.jpg";
import person from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero my-28 bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            alt="Person Image"
            className=" w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt="Parts Image"
            className="w-3/5 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="w-1/2 ps-12">
          <p className="text-2xl text-red-600 font-bold">About Us</p>
          <h1 className="text-5xl  my-5 font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6  text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
