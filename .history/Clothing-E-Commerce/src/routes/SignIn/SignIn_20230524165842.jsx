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
    </div>
  );
}

export default SignIn;
