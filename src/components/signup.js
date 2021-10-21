import React, { useContext } from "react";
import AuthForm from "./authForm";
import Footer from "./authFooter";
import Navbar from "./authNavbar";
import { AuthService } from "../services";
import { AuthenticationContext } from "../context";

const SignUp = ({ history }) => {
  document.getElementById("preloader").style.display = "none";
  const authContext = useContext(AuthenticationContext);

  const handleClick = (firstName, lastName, email, username, password) => {
    AuthService.register(firstName, lastName, email, username, password)
      .then(async (user) => {
        await authContext.login(user);
        history.push("/home-v2");
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
        <Navbar text="Already have an account?" buttonText="Sign In" />
        <AuthForm
          type="sign up"
          buttonText="Sign Up"
          handleClick={handleClick}
        />
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
