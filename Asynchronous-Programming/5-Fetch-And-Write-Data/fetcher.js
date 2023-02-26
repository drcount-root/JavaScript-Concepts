// import fs from "fs";
const fs = require("fs");

const URL =
  "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json";

const fetcherFunc = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //   console.log(data);
  const result = JSON.stringify(data);
  //   console.log(result);

  return fs.writeFile(
    "C:/Users/subha/Desktop/repos/JS/JavaScript-Concepts/Asynchronous-Programming/5-Fetch-And-Write-Data/db.json",
    result,
    (err) => {
      if (err) throw err;
      console.log("\nData Fetched Successfully & written into db.json file");
    }
  );
};

console.log(fetcherFunc(URL));

//
//
//
//
//
//
//
//
//

// import fs from "fs";
// const fs = require("fs");

// as declared above

const URL1 =
  "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json";

const fetcherFunc1 = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //   console.log(data);
  const result = JSON.stringify(data);
  //   console.log(result);

  return fs.writeFile(
    "C:/Users/subha/Desktop/repos/JS/JavaScript-Concepts/Asynchronous-Programming/5-Fetch-And-Write-Data/db.js",
    result,
    (err) => {
      if (err) throw err;
      console.log("\nData Fetched Successfully & written into db.js file");
    }
  );
};

console.log(fetcherFunc1(URL1));
