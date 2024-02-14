import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-10">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Popular Products</p>
        <h1 className="text-5xl font-bold py-4">Browse Our Products</h1>
        <p>
          Our products encompass a wide array of tools, equipment, and supplies
          tailored to <br /> meet the needs of professional mechanics,
          automotive technicians, and car enthusiasts alike.
        </p>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.service_id} product={product} />
        ))}
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-outline btn-default">More Products</button>
      </div>
    </div>
  );
};

export default Products;
