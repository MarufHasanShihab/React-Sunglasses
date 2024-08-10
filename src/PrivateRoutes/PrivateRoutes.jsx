import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user} = useAuth();
    if(!user?.email){
        return <Navigate to="/login"/>
    }
    return children
};

export default PrivateRoutes;