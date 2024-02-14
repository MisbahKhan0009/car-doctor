import React from "react";
import "./TimeAddress.css";
import timetable from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/icons/timetable.png";
import location from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/icons/location.png";
import call from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/icons/call.png";

const TimeAddress = () => {
  return (
    <section className="address-container rounded-xl bg-zinc-900 flex items-center justify-around mx-auto my-20">
      <div className="flex justify-center items-center gap-14 text-white">
        <div className="flex items-center">
          <img className="h-1/2" src={timetable} alt="" />

          <div className="ms-4">
            <p>We are open monday-friday</p>
            <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
          </div>
        </div>

        <div className="flex items-center">
          <img src={call} alt="" />

          <div className="ms-4">
            <p>Have a question?</p>
            <h3 className="text-2xl font-bold">+2546 251 2658</h3>
          </div>
        </div>

        <div className="flex items-center">
          <img src={location} alt="" />
          <div className="ms-4">
            <p>Need a repair? our address</p>
            <h3 className="text-2xl font-bold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeAddress;
