import { BG_URL } from "../Utility/constants";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="BG-Image"
        />
      </div>    
      <LoginForm />
    </div>
  );
};

export default Login;
