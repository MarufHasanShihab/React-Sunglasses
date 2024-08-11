import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    console.log(loading)
    if(loading) return <h1 className="text-5xl text-red-500">Loading</h1>
    if(!user?.email){
        return <Navigate to="/login"/>
    }
   
    return children
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoutes;