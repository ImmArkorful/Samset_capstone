import React, { useState } from "react";

const loginOptions = [
  {
    icon: "fa fa-facebook facebook",
    url: "https://www.facebook.com/codingeek.net/",
  },
  {
    icon: "fa fa-twitter twitter",
    url: "https://twitter.com/codingeeknet",
  },
  {
    icon: "fa fa-linkedin linkedin",
    url: "https://www.linkedin.com/company/codingeek/about/",
  },
  {
    icon: "fa fa-google google",
    url: "www.google.com",
  },
];

const AuthForm = ({ history, type, buttonText, handleClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const boldText = type
    .split(" ")
    .map((text) => text[0].toUpperCase() + text.substr(1, text.length));
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh", minHeight: "80vh" }}
    >
      <div className="col-lg-3 col-sm-6">
        <div className="d-flex justify-content-center">
          <p className="font-weight-bold text-dark" style={{ fontSize: 48 }}>
            {boldText.join(" ")}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-between">
            <ul className="social-icon">
              {loginOptions.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank">
                    <i className={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="d-flex flex-row justify-content-between">
          <button className="btn btn-yellow w-40" onClick={() => {}}>
            Sign In with Facebook
          </button>
          <button className="btn btn-yellow w-40" onClick={() => {}}>
            Sign In with Google
          </button>
        </div> */}

        <div className="d-flex flex-row justify-content-center align-items-center mt-4 mb-4">
          <hr
            style={{
              flex: 1,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#DCDCDC",
              marginRight: 10,
            }}
          />
          <p>or {type} with your username</p>
          <hr
            style={{
              flex: 1,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#DCDCDC",
              marginLeft: 10,
            }}
          />
        </div>
        <form className=" widget-subscribe" method="GET">
          {type === "sign up" && (
            <>
              {" "}
              <p
                className="font-weight-bold text-dark"
                style={{ fontSize: 20 }}
              >
                First Name
              </p>
              <div className="rld-single-input">
                <input
                  onChange={({ target }) => setFirstName(target.value)}
                  value={firstName}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>
              <p
                className="font-weight-bold text-dark"
                style={{ fontSize: 20 }}
              >
                Last Name
              </p>
              <div className="rld-single-input">
                <input
                  onChange={({ target }) => setLastName(target.value)}
                  value={lastName}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
              <p
                className="font-weight-bold text-dark"
                style={{ fontSize: 20 }}
              >
                Email
              </p>
              <div className="rld-single-input">
                <input
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </>
          )}
          <p className="font-weight-bold text-dark" style={{ fontSize: 20 }}>
            Username
          </p>
          <div className="rld-single-input">
            <input
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <p className="font-weight-bold text-dark" style={{ fontSize: 20 }}>
            Password
          </p>
          <div className="rld-single-input">
            <input
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              type="password"
              name="password"
              placeholder="********"
            />
          </div>
        </form>
        <div className="d-flex justify-content-center">
          <button
            className="d-flex btn btn-yellow w-25 justify-content-center"
            onClick={(e) => {
              // e.preventDefault();
              type === "sign up"
                ? handleClick(firstName, lastName, email, userName, password)
                : handleClick(userName, password);
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
