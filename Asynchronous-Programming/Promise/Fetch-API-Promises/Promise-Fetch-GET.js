// Get a list of all posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));

// Get a specific post by ID
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((post) => console.log(post))
  .catch((error) => console.error(error));

// Get a list of comments for a specific post by post ID
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => response.json())
  .then((comments) => console.log(comments))
  .catch((error) => console.error(error));

// Get a list of all albums
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => console.log(albums))
  .catch((error) => console.error(error));

// Get a specific album by ID
fetch("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => response.json())
  .then((album) => console.log(album))
  .catch((error) => console.error(error));

// Get a list of photos for a specific album by album ID
fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
  .then((response) => response.json())
  .then((photos) => console.log(photos))
  .catch((error) => console.error(error));

// Get a list of all todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => console.log(todos))
  .catch((error) => console.error(error));

// Get a specific todo by ID
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((todo) => console.log(todo))
  .catch((error) => console.error(error));

// Get a list of all users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.error(error));

// Get a specific user by ID
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
