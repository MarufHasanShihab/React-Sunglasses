import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../Config/firebase_config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // sign up with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in  with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // log out
  const logOut =()=>{
    signOut(auth)
  }

  useEffect(()=>{
    onAuthStateChanged(auth,  (user)=>{
      setUser(user);
    })
  },[])

  const authentications = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user
  };


  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
