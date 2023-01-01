const options = {
  method: "POST",
  body: JSON.stringify({
    title: "Foo",
    body: "Bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Output:
// { title: 'Foo', body: 'Bar', userId: 1, id: 101 }
