import React, { useState } from "react";
import "./Authendication.css";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import { FaGooglePlay } from "react-icons/fa";
import { SiMicrosoft } from "react-icons/si";
function Authendication() {
  const [active, setActive] = useState("Login");
  const handleChange = () => {
    setActive(active === "Login" ? "Signup " : "Login");
  };
  return (
    <div className="authendication">
      <div className="auth-left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth-right">
        {active === "Login" ? <Login /> : <Signup />}
        <div className="auth-more">
          <span>
            {active === "Login" ? (
              <>
                Don't have an account ?{""}
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Have an account ? {""}
                <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
        <div className="get_app">Get the app</div>
        <div className="play_buttons">
          <button className="play_button">
            <FaGooglePlay /> &nbsp;
            <span>
              Get It On <br /> <b>Goole Play</b>
            </span>
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className="play_button">
            <SiMicrosoft />
            &nbsp;
            <span>
              Get it from <br />
              <b>Microsoft</b>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authendication;
