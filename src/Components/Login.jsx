import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from "../Hooks/UseAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const {signInUser} = UseAuth()

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
        })
        .catch(error => {
            console.error(error);
            toast("Couldn't sign in! Please try again with correct email and password")
          });
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center font-playfair">Login now!</h1>
            <p className="py-6 max-w-3xl text-center">
            Securely access personalized services. Your gateway to tailored experiences awaits. Login now for exclusive benefits.
            </p>
          </div>
          <div className="rounded-lg shrink-0 w-full max-w-lg shadow-2xl bg-[#e2d7b9]">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
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
                <input
                  type=" password"
                  placeholder="Enter your password"
                  className="input input-bordered  bg-[#f1ead6] "
                  {...register("password", { required: true })}
                />
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
      <ToastContainer />
    </div>
  );
};

export default Login;
