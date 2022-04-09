import React from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../useFirebase/useFirebase";

const Login = () => {
  const { handelGoogleSignup } = useFirebase();
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <h3>Login</h3>
        <input type="email" name="" placeholder="Your email" id="" />
        <br />
        <input type="password" name="" placeholder="Password" id="" />
        <br />
        <input className="submit-button" type="submit" value="Login" />
        <span onClick={() => navigate("/signup")}>Signup! Account</span>
      </form>
      <button onClick={handelGoogleSignup}>Login with Google</button>
    </div>
  );
};

export default Login;
