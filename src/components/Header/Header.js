import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../useFirebase/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handelSignOut, handelGoogleSignup } = useFirebase();
  const [active, setActive] = useState(true);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/signup">Signup</Link>
        {!user?.uid && <Link to="/login">Login</Link>}
      </nav>
      {user?.uid && (
        <img
          onClick={() => setActive(!active)}
          className="profile-img"
          src={user?.photoURL}
          alt="profile"
        />
      )}
      {user?.uid && !active && (
        <div className="profile">
          <b>{user?.displayName}</b>
          <b>{user?.email}</b>
          <button className="logout-button" onClick={handelSignOut}>
            Logout
          </button>
          <button onClick={handelGoogleSignup}>Change Account</button>
        </div>
      )}
    </div>
  );
};

export default Header;
