import { useContext } from "react";
import { ErrorContext } from "../context";

const useError = () => useContext(ErrorContext);
export default useError;
