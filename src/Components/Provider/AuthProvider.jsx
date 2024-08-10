import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Config/firebase_config";
import PropTypes from "prop-types"

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const googleLogin = ()=>{
       return signInWithPopup(auth, provider);
    }
    const authentications = {
        googleLogin
    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;