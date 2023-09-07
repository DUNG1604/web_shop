import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { URL } from "../../utils/constants";

const Home = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate(URL.LOGIN);
  };
  return (
    <div>
      <div>Home nè</div>
      <Button onClick={handleLogOut}>LogOut</Button>
    </div>
  );
};

export default Home;
