import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext =createContext(null)
const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
   };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default FirebaseProvider;