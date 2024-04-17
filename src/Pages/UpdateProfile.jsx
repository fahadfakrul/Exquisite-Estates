import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";


const UpdateProfile = () => {
    const {updateUserProfile} = UseAuth();
    const {
        register,
        handleSubmit,
        
      } = useForm();
  const onSubmit = data => {
      const {name, email, photoUrl} = data;
      updateUserProfile(name, email, photoUrl)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.error(error);
      })
  };
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center font-playfair">
              Update Profile Now!
            </h1>
            <p className="py-6 max-w-3xl text-center">
            Update your profile easily! Enter your name, email, and photo URL, then hit update. It is that simple!
            </p>
          </div>
          <div className="rounded-lg shrink-0 w-full max-w-lg shadow-2xl bg-[#e2d7b9]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("name")}
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-playfair font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered  bg-[#f1ead6]"
                  {...register("email")}
                />
                
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
                  {...register("photoUrl")}
                />
              </div>
              
                
               
              
              
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#418397]  border-none">
                  Update
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateProfile;