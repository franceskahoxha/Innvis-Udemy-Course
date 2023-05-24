import React from "react";
import { signInWithGooglePopup } from "../../utils/Firebase/Firebase";
function SignIn() {
  // It uses signInWithGooglePopup to sign in the user with Google and logs the response to the console. The SignIn component renders a heading and a button that triggers the logGoogleUser function when clicked.
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
}

export default SignIn;
