import React, { useState } from "react";

import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
    } catch (error) {
      console.log("Error during signup", error);
      alert(error);
    }
  };
  return (
    <div className="signup">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default Signup;
