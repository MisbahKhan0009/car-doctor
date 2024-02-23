import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
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
          <div className="flex items-center justify-between">
            <p className="text-red-600 text-lg">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-outline  text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600">
                <p>Book Now</p>
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
