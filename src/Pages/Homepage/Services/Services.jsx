import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center ">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h1 className="text-5xl font-bold py-4">Our Service Area</h1>
        <p>
          When your vehicle encounters issues, whether it's a sudden breakdown
          or routine <br /> maintenance, a reliable car repairer service becomes
          invaluable.
        </p>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service} />
        ))}
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-outline btn-default">More Services</button>
      </div>
    </div>
  );
};

export default Services;
