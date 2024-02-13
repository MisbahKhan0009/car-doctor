import React from "react";
import notFound from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/notFound.png";

const NotFound = () => {
  return (
    <div className="grid place-content-center py-6 px-auto">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
