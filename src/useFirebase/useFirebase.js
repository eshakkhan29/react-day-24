import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../hooks/firebase.init";
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider(auth);

  const handelGoogleSignup = event => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handelSignOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return {
    user,
    setUser,
    handelGoogleSignup,
    handelSignOut,
  };
};
export default useFirebase;
