import { URL } from "../../utils/constants";
import { Outlet, Navigate } from "react-router-dom";
const Authentication = () => {
  const token = localStorage.getItem("token");
  if (token == null) {
    console.log("chưa có token");
    return <Navigate to={URL.LOGIN} />;
  }
  return <Outlet />;
};

export default Authentication;
