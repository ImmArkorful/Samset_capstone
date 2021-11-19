import React from "react";
import { Link } from "react-router-dom";

const AuthNavbar = ({ history, text, buttonText }) => {
  const to = buttonText === "Sign Up" ? "/signup" : "/";
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="container custom-navbar pt-2" style={{ height: "5vh" }}>
      <Link to="/" className="custom-actual-link">
        <img src={publicUrl + "/assets/img/logo.png"} alt="logo" />
      </Link>
      <div className="custom-navbar-options">
        <p className="font-weight-bold text-dark mr-3">{text}</p>
        <Link className="btn btn-yellow" to={to}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default AuthNavbar;
