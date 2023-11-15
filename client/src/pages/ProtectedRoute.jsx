import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
