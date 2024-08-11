import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile ,
  signOut,
} from "firebase/auth";
import auth from "../Config/firebase_config";
import PropTypes from "prop-types";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  // google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }

  // sign up with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in  with email and password
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // log out
  const logOut =()=>{
    signOut(auth)
  }

  // update profile
  const updateUserProfile = (name,photo)=>{
    updateProfile (auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth,  (user)=>{
      setUser(user);
      setLoading(false)
    })
  },[])

  const authentications = {
    googleLogin,
    githubLogin,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    user,
    loading
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
