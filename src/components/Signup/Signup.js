import React from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../useFirebase/useFirebase";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const { handelGoogleSignup } = useFirebase();
  return (
    <div className="form-page">
      <form>
        <h3>Signup</h3>
        <input type="text" placeholder="Your name" /> <br />
        <input type="email" name="" placeholder="Your email" id="" />
        <br />
        <input type="password" name="" placeholder="Password" id="" />
        <br />
        <input type="password" name="" placeholder="Retype Password" id="" />
        <br />
        <input className="submit-button" type="submit" value="Signup" />
        <span onClick={() => navigate("/login")}>have account?</span>
      </form>
      <button onClick={handelGoogleSignup}>Login with Google</button>
    </div>
  );
};

export default Signup;
