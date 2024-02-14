import React, { useContext } from "react";
import { Link } from "react-router-dom";
import signup from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  const { createUser, googleSignup, githubSignup } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignUp = (event) => {
    event.preventDefault();
    googleSignup()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleGithubSignUp = (event) => {
    event.preventDefault();
    githubSignup()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero my-20 w-full bg-base-100">
      <div className="hero-content grid  gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={signup} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center mt-6 font-bold">Signup</h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-error text-white"
                type="submit"
                value="Signup"
              />
            </div>
          </form>

          <div className="text-center">
            <p>Or Sign Up with</p>
            <button
              className="text-center mx-3 my-3 tooltip tooltip-left"
              onClick={handleGoogleSignUp}
              data-tip="Continue with Google"
            >
              <FcGoogle className="text-2xl" />
            </button>
            <button
              className=" mx-3 my-6 tooltip tooltip-right"
              onClick={handleGithubSignUp}
              data-tip="Continue with Github"
            >
              <FaGithub className="text-2xl" />
            </button>
          </div>

          <p className="text-center mb-10">
            Already have an account?
            <Link className="text-red-600 font-bold" to={"/login"}>
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
