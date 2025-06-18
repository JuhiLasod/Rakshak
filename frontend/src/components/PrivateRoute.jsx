import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PrivateRoute = ({ children }) => {const navigate=useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
          navigate("/"); // or /login
        }
      }, [token, navigate]);
    
      return token ? children : null;
  };
  
  export default PrivateRoute;