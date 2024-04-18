import { Link ,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";
import {  useLocation } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const {signInUser} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {email, password} = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Login successful!");
                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
              Swal.fire("Login unsuccessful! Please try again.");
                console.error(error);
            })
    }
  return (
    <div>
      <div className="  lg:p-0 min-h-screen ">
        <div className="hero-content flex-col ">
          <div className=" text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center font-playfair">Login now!</h1>
            <p className="py-6 max-w-3xl text-center">
            Securely access personalized services. Your gateway to tailored experiences awaits. Login now for exclusive benefits.
            </p>
          </div>
          <div className="  rounded-lg shrink-0 p-4 md:w-full max-w-lg  lg:shadow-2xl bg-[#e2d7b9]">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body
             ">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-[#f1ead6] "
                  {...register("password", { required: true })}
                />
                <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>
                {errors.password && <span className="text-red-500">This field is required</span>}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-3">
                <button className="btn text-white bg-[#418397]  border-none">Login</button>
              </div>
             
            </form>
            <div className="mb-3"><p className="text-center">Or</p>
        <p className="text-center">Login With</p></div>
           <div className="flex justify-center">
           <SocialLogin></SocialLogin>
           
           </div>
           <div className="card-body">
           <Link to={"/register"} className="mt-3 ">If you are new here, <button className="underline underline-offset-1 hover:text-[#418397]">Register here!</button></Link>
           </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
