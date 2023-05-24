import React from "react";
import { signInWithGooglePopup } from "../../utils/Firebase/Firebase";
function SignIn() {
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
