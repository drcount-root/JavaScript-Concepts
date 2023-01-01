const options = {
  method: "DELETE",
};

fetch("https://jsonplaceholder.typicode.com/posts/1", options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Output:
// {}

// This code sends a DELETE request to the /endpoint/1 endpoint of the API to delete the resource with ID 1. If the request is successful, the resulting data (which may include the deleted resource) will be logged to the console.
