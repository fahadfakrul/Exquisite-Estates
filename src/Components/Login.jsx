import { Link } from "react-router-dom";

const Login = () => {
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
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered  bg-[#f1ead6]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Password</span>
                </label>
                <input
                  type=" password"
                  placeholder="Enter your password"
                  className="input input-bordered  bg-[#f1ead6] "
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#418397]  border-none">Login</button>
              </div>
              <Link to={"/register"} className="mt-5">If you are new here, <button className="underline underline-offset-1 hover:text-[#418397]">Register here!</button></Link>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
