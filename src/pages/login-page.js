import React, { useContext } from "react";
import AuthForm from "../components/auth-components/authForm";
import Footer from "../components/auth-components/authFooter";
import Navbar from "../components/auth-components/authNavbar";
import { AuthService } from "../services";
import { AuthenticationContext } from "../context";
import useError from "../hooks/useError";

const Login = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const { setError } = useError();

  const handleClick = ({ username, password }) => {
    AuthService.login(username, password)
      .then(async (user) => {
        console.log(user);
        const h = await authContext.login(user);
        h && history.push("/home-v2");
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  return (
    <>
      <div>
        <Navbar text="New to Estic?" buttonText="Sign Up" />
        <AuthForm type="sign in" buttonText="Login" handleClick={handleClick} />
        <Footer />
      </div>
    </>
  );
};

export default Login;
