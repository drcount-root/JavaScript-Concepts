const options = {
  method: "PATCH",
  body: JSON.stringify({
    title: "Updated Title",
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

// {
//     userId: 1,
//     id: 1,
//     title: 'Updated Title',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }
