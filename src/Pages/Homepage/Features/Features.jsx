import React from "react";

const Features = () => {
  return (
    <div className="pb-16">
      <div className="text-center ">
        <p className="text-2xl font-bold text-orange-600">Core Features</p>
        <h1 className="text-5xl font-bold py-4">Why Choose Us</h1>
        <p>
          Timeliness is the cornerstone of our service. We understand the
          importance of <br /> your time and the urgency of your automotive
          needs. That's why our team is committed to delivering prompt and
          <br />
          punctual service, ensuring that your vehicle is back on the road
          swiftly and safely.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 my-12 w-11/12 mx-auto text-center ">
        <div className="m-2 p-4 flex flex-col justify-center items-center border-2 border-zinc-200 rounded-lg">
          <img
            className="max-h-12 m-2"
            src="/src/assets/icons/group.svg"
            alt=""
          />
          <p className="font-bold text-gray-700 mt-2">Expert Team</p>
        </div>
        <div className="m-2 p-4 bg-red-600 flex flex-col justify-center items-center border-2 border-red-600 rounded-lg">
          <img className="max-h-12" src="/src/assets/icons/clock.svg" alt="" />
          <p className="font-bold text-white  mt-2">Timely Delivery</p>
        </div>
        <div className="m-2 p-4 flex flex-col justify-center items-center border-2 border-zinc-200 rounded-lg">
          <img
            className="max-h-12 m-2"
            src="/src/assets/icons/person.svg"
            alt=""
          />
          <p className="font-bold text-gray-700  mt-2">24/7 Support</p>
        </div>
        <div className="m-2 p-4 flex flex-col justify-center items-center border-2 border-zinc-200 rounded-lg">
          <img
            className="max-h-12 m-2"
            src="/src/assets/icons/wrench.svg"
            alt=""
          />
          <p className="font-bold text-gray-700  mt-2">Best Equipment</p>
        </div>
        <div className="m-2 p-4 flex flex-col justify-center items-center border-2 border-zinc-200 rounded-lg">
          <img
            className="max-h-12 m-2"
            src="/src/assets/icons/check.svg"
            alt=""
          />
          <p className="font-bold text-gray-700  mt-2">100% Guranty</p>
        </div>
        <div className="m-2 p-4 flex flex-col justify-center items-center border-2 border-zinc-200 rounded-lg">
          <img
            className="max-h-12 m-2"
            src="/src/assets/icons/delivery.svg"
            alt=""
          />
          <p className="font-bold text-gray-700  mt-2">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
