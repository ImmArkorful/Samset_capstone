import React, { useContext } from "react";
import AuthForm from "./authForm";
import Footer from "./authFooter";
import Navbar from "./authNavbar";
import { AuthService } from "../services";
import { AuthenticationContext } from "../context";

const Login = ({ history }) => {
  document.getElementById("preloader").style.display = "none";
  const authContext = useContext(AuthenticationContext);

  const handleClick = (username, password) => {
    AuthService.login(username, password)
      .then(async (user) => {
        const h = await authContext.login(user);
        h && history.push("/home-v2");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Navbar text="New to Estic?" buttonText="Sign Up" />
        <AuthForm type="sign in" buttonText="Login" handleClick={handleClick} />
        <Footer />
      </div>
    </>
  );
};

export default Login;
