import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate, useLocation } from "react-router-dom";
const SocialLogin = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const {googleLogin, githubLogin, facebookLogin}= UseAuth()
    const handleGoogleLogin = () => {
      googleLogin().then(() => {
        // Navigate after successful login
        navigate(location?.state ? location.state : '/');
      }).catch(error => {
        console.error("Google login failed:", error);
      });
    };
    const handleGithubLogin = () => {
      githubLogin().then(() => {
        // Navigate after successful login
        navigate(location?.state ? location.state : '/');
      }).catch(error => {
        console.error("Github login failed:", error);
      });
    };
    const handleFacebookLogin = () => {
      facebookLogin().then(() => {
        // Navigate after successful login
        navigate(location?.state ? location.state : '/');
      }).catch(error => {
        console.error("facebook  login failed:", error);
      });
    };
  return (
    <div className="flex gap-2">
      
       
        
        <button onClick={handleGoogleLogin} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGoogle /> Google Login</button>
        <button onClick={handleGithubLogin} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGithub /> GitHub Login</button>
        <button onClick={handleFacebookLogin} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaFacebook /> Facebook Login</button>
      
    </div>
  );
};

export default SocialLogin;
