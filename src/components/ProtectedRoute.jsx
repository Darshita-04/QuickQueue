import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({ children }) => {  
 const useAuth = () => useContext(AuthContext);
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
