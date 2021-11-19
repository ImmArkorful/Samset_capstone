import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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
  const loginInputs = {
    username: Yup.string().max(255).required("Username is required"),
    password: Yup.string().min(8).required("Password is required"),
  };

  const signUpInputs = {
    firstName: Yup.string().max(255).required("First name is required"),
    lastName: Yup.string().max(255).required("Last name is required"),
    username: Yup.string().max(255).required("Username is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  };

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
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            username: "",
          }}
          validationSchema={Yup.object().shape(
            type === "sign up" ? signUpInputs : loginInputs
          )}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleClick(values)
            setSubmitting(false);
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form
              noValidate
              className=" widget-subscribe"
              onSubmit={handleSubmit}
            >
              {type === "sign up" && (
                <>
                  <p
                    className="font-weight-bold text-dark"
                    style={{ fontSize: 20 }}
                  >
                    First Name
                  </p>
                  <div className="rld-single-input">
                    <input
                      type="text"
                      value={values.firstName}
                      name="firstName"
                      placeholder="Firsr Name"
                      error={touched.firstName && errors.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.firstName && errors.firstName && (
                      <small className="text-danger form-text">
                        {errors.firstName}
                      </small>
                    )}
                  </div>
                  <p
                    className="font-weight-bold text-dark"
                    style={{ fontSize: 20 }}
                  >
                    Last Name
                  </p>
                  <div className="rld-single-input">
                    <input
                      type="text"
                      value={values.lastName}
                      name="lastName"
                      placeholder="Last Number"
                      error={touched.lastName && errors.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.lastName && errors.lastName && (
                      <small className="text-danger form-text">
                        {errors.lastName}
                      </small>
                    )}
                  </div>
                  <p
                    className="font-weight-bold text-dark"
                    style={{ fontSize: 20 }}
                  >
                    Email
                  </p>
                  <div className="rld-single-input">
                    <input
                      type="text"
                      value={values.email}
                      name="email"
                      placeholder="Email"
                      error={touched.email && errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.email && errors.email && (
                      <small className="text-danger form-text">
                        {errors.email}
                      </small>
                    )}
                  </div>
                </>
              )}
              <p
                className="font-weight-bold text-dark"
                style={{ fontSize: 20 }}
              >
                Username
              </p>
              <div className="rld-single-input">
                <input
                  type="text"
                  value={values.username}
                  name="username"
                  placeholder="Username"
                  error={touched.username && errors.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.username && errors.username && (
                  <small className="text-danger form-text">
                    {errors.username}
                  </small>
                )}
              </div>
              <p
                className="font-weight-bold text-dark"
                style={{ fontSize: 20 }}
              >
                Password
              </p>
              <div className="rld-single-input">
                <input
                  type="password"
                  value={values.password}
                  name="password"
                  placeholder="************"
                  error={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.password && errors.password && (
                  <small className="text-danger form-text">
                    {errors.password}
                  </small>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="d-flex btn btn-yellow w-25 justify-content-center"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;
