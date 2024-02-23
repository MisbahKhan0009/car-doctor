import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Checkout.css";
import { PhoneAuthCredential } from "firebase/auth";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  let [isEnabled, setIsEnabled] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cknowledged) {
          alert("Order Placed");
          form.reset;
        }
      })
      .catch((er) => console.error(er));
  };
  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
    setIsEnabled(newPhone.length > 12);
  };

  return (
    <div className="px-32 ">
      <div className="mb-36 mt-24 ">
        <div className="image-container">
          <img
            src="/assets/images/checkout/checkout.png"
            className="mx-auto"
            alt=""
          />
          <div className="gradient-layer">
            <h1 className="text-white text-4xl pt-32 font-bold ps-24">
              Checkout
            </h1>
            <div className="trapi"></div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handlePlaceOrder}
        className="p-24 bg-gray-200 rounded-xl "
      >
        <div className="text-center pb-14">
          <h2 className="text-4xl mb-3">{title}</h2>
          <h2 className="text-2xl text-red-600">Price: ${price}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input input-bordered w-full "
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            onChange={handlePhoneChange}
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          type="text"
          placeholder="Your Message"
          name="message"
          className="textarea textarea-bordered text-start text-lg  my-5 h-60 w-full "
        />
        <button
          disabled={!isEnabled}
          className="btn btn-error text-lg font-normal text-white w-full hover:bg-white hover:text-red-600 "
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
