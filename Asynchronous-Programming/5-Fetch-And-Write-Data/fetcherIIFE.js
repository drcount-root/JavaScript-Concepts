// import fs from 'fs';
const fs = require("fs");

(async function fetcherFunc(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  const result = JSON.stringify(data);

  fs.writeFile(
    "C:/Users/subha/Desktop/repos/JS/JavaScript-Concepts/Object-Concepts/db.js",
    result,
    (err) => {
      console.log(err);
    }
  );
})(
  "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json"
);
