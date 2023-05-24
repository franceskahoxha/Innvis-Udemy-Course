import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase";
function SignIn() {
  // Uses signInWithGooglePopup to sign in the user with Google and logs the response to the console.
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
}

export default SignIn;
