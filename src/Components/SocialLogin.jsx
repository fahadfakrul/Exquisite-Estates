import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate, useLocation } from "react-router-dom";
const SocialLogin = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const {googleLogin, githubLogin, facebookLogin}= UseAuth()

   

    const handleSocialLogin =  socialProvider =>{
      socialProvider()
      .then((result) => {
        
        // Navigate after successful login
        if(result.user){
          navigate(location?.state ? location.state : '/');
          window.scrollTo(0, 0);
        }
      }).catch(error => {
        console.error("Google login failed:", error);
      });
    }
  
  return (
    <div className=" flex flex-col md:flex-row gap-2">
      
       
        
        <button onClick={() => handleSocialLogin(googleLogin)} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGoogle /> Google Login</button>
        <button onClick={() => handleSocialLogin(githubLogin)} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGithub /> GitHub Login</button>
        <button onClick={() => handleSocialLogin(facebookLogin)} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaFacebook /> Facebook Login</button>
      
    </div>
  );
};

export default SocialLogin;
