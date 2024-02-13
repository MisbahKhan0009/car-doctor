import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="m-2">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="p-4">
          <img
            className=" rounded-lg max-h-52 w-full object-cover"
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body mb-4">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <p className="text-red-600">Price: ${price}</p>
            <button>
              <FaArrowRight className="text-red-600 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
