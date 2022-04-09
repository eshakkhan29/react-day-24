import React from "react";
import './Home.css'
import useFirebase from "../../useFirebase/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h1>Home Page</h1>
      <p className="warning">Please login first</p>
      {user?.uid && (
        <div>
          <h1 className="successes">You are successfully Login in my website </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
