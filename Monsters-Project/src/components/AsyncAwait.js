import React from "react";

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information One +  ${response}`);
  });
}

// Async function with .then of our Promise

// makeRequest("Facebook")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processRequest) => {
//     console.log(processRequest);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Async Await Function of our Promise
async function doWork() {
  try {
    const response = await makeRequest("Tiktok");
    console.log(response);
    const proccessResponse = await processRequest(response);
    console.log(proccessResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
function AsyncAwait() {
  return <div> This is a test for an Async Await function</div>;
}

export default AsyncAwait;
