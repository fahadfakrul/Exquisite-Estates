import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        Swal.fire("Registration successful!");
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        Swal.fire("Registration unsuccessful!");
        console.error(error);
      });
  };
  return (
    <div>
      <div className="lg:p-0 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center font-playfair">
              Register now!
            </h1>
            <p className="py-6 max-w-3xl text-center">
              Unlock a world of possibilities. Join us today to personalize your
              experience. Register now and start your journey with us.
            </p>
          </div>
          <div className="rounded-lg shrink-0 p-4 md:w-full  max-w-lg  lg:shadow-2xl bg-[#e2d7b9]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("name", {
                    required: "error message", // JS only: <p>error message</p> TS only support string
                  })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("email", {
                    required: "error message", // JS only: <p>error message</p> TS only support string
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="photoUrl"
                  placeholder="Enter your photo URL"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("url")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">
                    Password
                  </span>
                </label>
               <div className="relative ">
               <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input w-full input-bordered  bg-[#f1ead6] "
                  {...register("password", {
                    minLength: {
                      value: 6, // Minimum length of the password
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                      message:
                        "Password must contain at least one uppercase letter and one lowercase letter",
                    },
                  })}
                />
                <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
               </div>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control my-6">
                <button className="btn text-white bg-[#418397]  border-none">
                  Register
                </button>
              </div>
              <Link to={"/login"} className="">
                Already have an account,{" "}
                <button className="underline underline-offset-1 hover:text-[#418397]">
                  Login here!
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
