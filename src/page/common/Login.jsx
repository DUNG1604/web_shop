import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { URL } from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const token = "tokenday";
    localStorage.setItem("token", token);

    if (token) {
      navigate(URL.HOME);
    }
  };

  return (
    <div>
      <div>Login</div>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
};

export default Login;
