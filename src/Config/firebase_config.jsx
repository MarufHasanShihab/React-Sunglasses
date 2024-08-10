// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbwOZKAwsjrVw2uFa4lvu26yd6kNZIhyg",
  authDomain: "react-sunglasses-329d9.firebaseapp.com",
  projectId: "react-sunglasses-329d9",
  storageBucket: "react-sunglasses-329d9.appspot.com",
  messagingSenderId: "119781301275",
  appId: "1:119781301275:web:1c7f89ebb5abebefc46cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth