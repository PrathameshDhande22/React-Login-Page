import propTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navi = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navi("/");
    }
  }, [navi]);
  return <>{children}</>;
};
export default Auth;

Auth.propTypes = {
  children: propTypes.node,
};
