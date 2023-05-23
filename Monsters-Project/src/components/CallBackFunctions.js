import React from "react";

// Create a function wich takes in two parameters, one of each is a function
// That function is called a "Callback" function
// Its called a "Callback" because the function "exampleFunction" is going to do some work first, and than call that function
const exampleFunction = (parameter1, callBackFunc) => {
  const x = 2 + parameter1;
  callBackFunc(x);
};

exampleFunction(5, (callBackFunc) => {
  // console.log(callBackFunc);
});

function CallBackFunctions() {
  return <div>CallBackFunctions</div>;
}

export default CallBackFunctions;
