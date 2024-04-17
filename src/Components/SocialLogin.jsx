import { FaGoogle,FaGithub } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
const SocialLogin = () => {
    const {googleLogin, githubLogin}= UseAuth()
  return (
    <div className="flex gap-2">
      
        
        
        <button onClick={() =>googleLogin()} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGoogle /> Google Login</button>
        <button onClick={() =>githubLogin()} className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGithub /> GitHub Login</button>
        <button className="btn bg-[#418397] text-white border-none rounded-xl p-4"><FaGithub /> Google Login</button>
      
    </div>
  );
};

export default SocialLogin;
