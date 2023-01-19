const fetchDataFunction = async () => {
  try {
    const allData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    return allData;
  } catch (error) {
    console.log(error);
  }
};

fetchDataFunction();

// Output:
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//
//
//
///////////// Using then() all the time can lead kind of then hell /////////////
//
// So it's better to break things into parts
//

const fetchDataFunction1 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataFunction1();

// Output:
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// This program makes a GET request to the URL https://jsonplaceholder.typicode.com/todos/1, which retrieves the data for a specific todo item with an ID of 1. The await keyword is used to wait for the fetch call to complete, and the resulting response is stored in the response variable.

// The response.json() method parses the response as JSON and returns a promise that resolves to the parsed JSON data. The await keyword is used again to wait for the promise to resolve, and the resulting data is stored in the data variable.

// If the fetch call or the response.json() method throw an error, it will be caught by the catch block, which logs the error to the console.

//
//
// async-await fetch post try catch
//
//

const fetchReqRes = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2", {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();
    console.log(response.status);
    console.log(body);
  } catch (error) {
    console.log(error);
  }
};

fetchReqRes();
