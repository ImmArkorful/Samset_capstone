import React, { useContext } from "react";
import AuthForm from "../components/auth-components/authForm";
import Footer from "../components/auth-components/authFooter";
import Navbar from "../components/auth-components/authNavbar";
import { AuthService } from "../services";
import { AuthenticationContext } from "../context";
import useError from "../hooks/useError";

const SignUp = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const { setError } = useError();

  const handleClick = ({ firstName, lastName, email, username, password }) => {
    AuthService.register(firstName, lastName, email, username, password)
      .then(async (user) => {
        await authContext.login(user);
        history.push("/home-v2");
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  return (
    <>
      <div>
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
