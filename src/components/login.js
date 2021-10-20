import React from "react";

const Login = ({ history }) => {
  document.getElementById("preloader").style.display = "none";

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-lg-3 col-sm-6">
        <form className="widget widget-subscribe" method="GET">
          <div className="rld-single-input">
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="rld-single-input">
            <input type="text" name="email" placeholder="Your@email.com" />
          </div>
          <button
            className="btn btn-yellow w-100"
            onClick={() => history.push("/home-v2")}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
