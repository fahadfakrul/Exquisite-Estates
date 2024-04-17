import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const UseAuth = () => {
    const allAuthContext = useContext(AuthContext);
    return allAuthContext;
};

export default UseAuth;