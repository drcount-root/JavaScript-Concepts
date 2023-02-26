const fs = require("fs");

const fetcherFunc = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  fs.writeFile(
    "C:Users/subha/Desktop/repos/JS/JavaScript-Concepts/Object-Concepts/db.json",
    JSON.stringify(data),
    (err) => {
      console.log(err);
    }
  );
};

const URL =
  "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json";

console.log(fetcherFunc(URL));
