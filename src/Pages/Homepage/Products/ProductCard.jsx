import React from "react";

const ProductCard = ({ product }) => {
  const { title, rating, productImg, price } = product;
  return (
    <div className="m-2">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="p-4">
          <img
            className=" rounded-lg max-h-52 w-full object-contain"
            src={productImg}
            alt={title}
          />
        </figure>
        <div className="card-body mb-4">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <p className="text-red-600">Price: ${price}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
