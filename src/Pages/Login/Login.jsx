import React, { useContext } from "react";
import signup from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

          navigate(from, { replace: true });
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("doctor-token", data.token);
          });
      })
      .then((err) => console.error(err));
  };

  return (
    <div className="hero my-20 w-full bg-base-100">
      <div className="hero-content grid  gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={signup} alt="" />
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
                name="email"
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
                name="password"
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
              data-tip="Continue with Github"
            >
              <FaGithub className="text-2xl" />
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
