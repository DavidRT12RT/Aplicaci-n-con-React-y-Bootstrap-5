import {useContext} from "react"
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../../auth/authContext";

export const PrivateRoute = ({children}) =>{

    //Hook para obtener location del usuario al igual que sus querys
    const {pathname,search} = useLocation();
    const {user} = useContext(AuthContext);
    localStorage.setItem('lastPath',pathname+search);
    return (user.logged) ? children : <Navigate to="/login"/>;
  
}
