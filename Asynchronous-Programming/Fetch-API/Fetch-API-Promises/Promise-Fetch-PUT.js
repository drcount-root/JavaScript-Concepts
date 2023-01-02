const options = {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts/1", options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Output:
// { id: 1, title: 'Updated Title', body: 'Updated Body', userId: 1 }
