import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

const Teams = () => {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Team</p>
        <h1 className="text-5xl font-bold py-4">Meet Our Team</h1>
        <p>
          Our expert car mechanic team represents the pinnacle of automotive
          proficiency, <br /> combining technical expertise, practical
          experience, and a passion for precision to deliver exceptional
          service.
        </p>
      </div>

      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-4">
              <img
                className=" rounded-lg max-h-52 w-full object-cover"
                src="/assets/images/team/1.jpg"
                alt="member"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jack Wilson</h2>
              <p>Car Engine Expert</p>
              <div className="flex">
                <button className="btn btn-circle m-1 bg-sky-700 text-white hover:bg-sky-600 ">
                  <FaLinkedinIn className=" text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-blue-900 text-white hover:bg-blue-800 ">
                  <TiSocialFacebook className="text-4xl" />
                </button>
                <button className="btn btn-circle m-1 bg-pink-600 text-white hover:bg-pink-500 ">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-black text-white hover:bg-zinc-800 ">
                  <FaXTwitter className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-4">
              <img
                className=" rounded-lg max-h-52 w-full object-cover"
                src="/assets/images/team/2.jpg"
                alt="member"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Donand Wayne</h2>
              <p>Expert Mechanic</p>
              <div className="flex">
                <button className="btn btn-circle m-1 bg-sky-700 text-white hover:bg-sky-600 ">
                  <FaLinkedinIn className=" text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-blue-900 text-white hover:bg-blue-800 ">
                  <TiSocialFacebook className="text-4xl" />
                </button>
                <button className="btn btn-circle m-1 bg-pink-600 text-white hover:bg-pink-500 ">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-black text-white hover:bg-zinc-800 ">
                  <FaXTwitter className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-4">
              <img
                className=" rounded-lg max-h-52 w-full object-cover"
                src="/assets/images/team/3.jpg"
                alt="member"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Richard Oliver</h2>
              <p>Car Parts Expert</p>
              <div className="flex">
                <button className="btn btn-circle m-1 bg-sky-700 text-white hover:bg-sky-600 ">
                  <FaLinkedinIn className=" text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-blue-900 text-white hover:bg-blue-800 ">
                  <TiSocialFacebook className="text-4xl" />
                </button>
                <button className="btn btn-circle m-1 bg-pink-600 text-white hover:bg-pink-500 ">
                  <FaInstagram className="text-2xl" />
                </button>
                <button className="btn btn-circle m-1 bg-black text-white hover:bg-zinc-800 ">
                  <FaXTwitter className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
