import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner text-black loading-lg "></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    estate: PropTypes.node.isRequired,
  }
export default PrivateRoute;