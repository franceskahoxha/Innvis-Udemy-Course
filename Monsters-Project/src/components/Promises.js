import React from "react";
// -------- New Promise Function -------------
let p = new Promise((resolve, reject) => {
  let x = 1 + 1;
  if (x === 7) {
    resolve("success");
  } else {
    reject("error");
  }
});

// This is how a Promise function is called
p.then((message) => {
  // console.log("then => " + message);
}).catch((message) => {
  // console.log("then => " + message);
});
//----------------------------------------------

//------------------ If we have multiple Promise Functions:

let recordVideoOne = new Promise((resolve, reject) => {
  resolve("video one");
});
let recordVideoTwo = new Promise((resolve, reject) => {
  resolve("video two");
});
let recordVideoThree = new Promise((resolve, reject) => {
  resolve("video three");
});

// This is how we are going to run multiple Promise Functions:
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((message) => {
    // console.log(message, "----then message-----");
  })
  .catch((error) => {
    // console.log(error, "----then message-----");
  });

function Promises() {
  return <div>Promises</div>;
}

export default Promises;
