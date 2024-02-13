import React from "react";
import login from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero my-20 w-full bg-base-100">
      <div className="hero-content grid  gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center mt-6 font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-error text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="text-center">
            <p>Or Log in with</p>
            <button
              className="text-center mx-3 my-3 tooltip tooltip-left"
              data-tip="Continue with Google"
            >
              <FcGoogle className="text-2xl" />
            </button>
            <button
              className=" mx-3 my-6 tooltip tooltip-right"
              data-tip="Continue with Twitter"
            >
              <FaXTwitter className="text-2xl" />
            </button>
          </div>

          <p className="text-center mb-10">
            New to Car Doctor?
            <Link className="text-red-600 font-bold" to={"/signup"}>
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
