import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext =createContext(null)
const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
     return signInWithPopup(auth, googleProvider)
    }
    
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    


    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user);
            } 
          })
    },[])

     
    const authInfo = {
       createUser,
       signInUser,
       googleLogin,
       githubLogin,
   };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default FirebaseProvider;