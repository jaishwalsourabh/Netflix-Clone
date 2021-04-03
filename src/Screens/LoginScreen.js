import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen.js";

function LoginScreen() {
  const [SignIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="SignIn_Button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_Gradient" />
      </div>

      <div className="loginScreen_body">
        {SignIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
