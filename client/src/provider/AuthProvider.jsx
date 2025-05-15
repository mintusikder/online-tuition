import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email, password);
  };
  //user login 
  const loginUser = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
//logOut 
const logOutUser = () =>{
   return signOut(auth)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser)
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    loader,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
