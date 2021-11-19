import React, { useContext } from "react";
import { ErrorContext } from "../context";
// import useError from "../hooks/useError";

const ErrorMessage = () => {
    const { error } = useContext(ErrorContext);
//   const { error } = useError();

  return <div>{error && <div style={{ color: "red" }}>{error}</div>}</div>;
};

export default ErrorMessage;
