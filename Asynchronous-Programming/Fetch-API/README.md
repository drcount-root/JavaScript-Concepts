## FETCH API

The fetch() function is a modern way to make HTTP requests in JavaScript, and it can be used to send any type of HTTP request. Here are the different types of requests that you can send using the fetch() function:

1. `GET`: retrieve data from a server **(Read)**
2. `POST`: send data to a server to create a new resource **(Create)**
3. `PUT`: send data to a server to update an existing resource **(Update)**. Replaces a set of resource values with another set of values
4. `PATCH`: update a resource on a server using partial updates **(Partial Update)**
5. `DELETE`: delete a resource on a server **(Delete)**
6. `HEAD`: retrieve the headers for a resource
7. `OPTIONS`: retrieve the HTTP methods that a server supports for a specific URL

### Methods

The fetch() api in JavaScript is used to request data from a server.
The request can be of any type, but that returns the data in **JSON or XML**.
The fetch() method requires one parameter, the **URL** to request, and returns a **promise**.

#### Parameters:

This fetch() method requires one parameter and accepts two parameters:

1. **URL**: It is the URL to which the request is to be made.
2. **Options**: It is an array of properties. It is an optional parameter.

#### Return Value:

It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an **array of objects** or simply a **single object**.

<hr>

### response.json()

The `response.json()` method is a method of the `response` object that is returned by the fetch function. It **parses the body of the response as JSON** and returns a promise that resolves to the **parsed JSON data**.

For example, if the fetch function makes a GET request to an API endpoint that returns a `JSON object`, you can use the `response.json()` method to parse the response and access the data contained in the `JSON object`.

Here is an example of using the response.json() method:

```
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}

getData();
```

In this example, the fetch function makes a GET request to the JSONPlaceholder API to retrieve the data for a specific todo item. The response.json() method is called on the response object to parse the response as JSON and return a promise that resolves to the parsed data. The await keyword is used to wait for the promise to resolve, and the resulting data is logged to the console.

<hr>

### JSON.stringify()

`JSON.stringify()` is a method in JavaScript that `converts a JavaScript value (such as an object, array, or string) to a JSON string`.

Here is an example of using JSON.stringify() to convert an `object to a JSON string`:

```
const object = {
  name: 'John',
  age: 30
};

const json = JSON.stringify(object);
console.log(json);

// Output:
// '{"name":"John","age":30}'
```

You can also use JSON.stringify() to convert an `array to a JSON string`:

```
const array = [1, 2, 3, 4];

const json = JSON.stringify(array);
console.log(json);

// Output:
// '[1,2,3,4]'
```

<hr>

### JSON.parse()

`JSON.parse()` is a method in JavaScript that `parses a JSON string and returns the JavaScript equivalent`.

Here is an example of using JSON.parse() to `parse a JSON string that represents an object`:

```
const json = '{"name":"John","age":30}';
const object = JSON.parse(json);
console.log(object);

// Output:
// {name: 'John', age: 30}

```

You can also use JSON.parse() to `parse a JSON string that represents an array`:

```
const json = '[1, 2, 3, 4]';
const array = JSON.parse(json);
console.log(array);

// Output:
// [1, 2, 3, 4]

```

### Use cases of `response.json()`, `JSON.stringify()` & `JSON.parse()`:

```
`JS Object or Array` => `JSON String`
```

`JSON.stringify()` is used to convert a JavaScript value (such as an object, array, or string) to a JSON string. It is often used when sending data from a client (such as a web browser) to a server, or when storing data in a file or database.

```
// Example of response.json() & JSON.stringify() together

async function createTodo() {
  const todo = {
    title: 'Learn about JSON.stringify()',
    completed: false
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', options);
  const data = await response.json();
  console.log(data);
}

createTodo();
```

In this example, the createTodo function makes a POST request to the /todos endpoint of the JSONPlaceholder API to create a new todo item. The todo object is converted to a JSON string using JSON.stringify() and passed as the body of the request in the options object. The Content-Type header is set to application/json to indicate that the body of the request is a JSON string.

The response.json() method is called on the response object to parse the response as JSON and return a promise that resolves to the parsed data. The await keyword is used to wait for the promise to resolve, and the resulting data is logged to the console.

<br>

```
`JSON String` => `JS Object or Array`
```

`JSON.parse()` is used to parse a JSON string and return the JavaScript equivalent (Object, Array). It is often used when receiving data from a server, or when reading data from a file or database.

```
// Example of response.json() & JSON.parse() together

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  const data = JSON.parse(json);
  console.log(data);
}

getData();
```

In this example, the fetch function is used to make an HTTP request to retrieve a JSON object from the JSONPlaceholder API. The response.json() method is called on the response object to parse the response as JSON and return a promise that resolves to the parsed data. The await keyword is used to wait for the promise to resolve, and the resulting data is stored in the json variable.

Then, the JSON.parse() function is called on the json variable to parse the JSON string and return the JavaScript equivalent. The resulting data is stored in the data variable and logged to the console.

<br>

`response.json()` is a method of the Response object that is returned by the fetch function. It parses the body of the response as JSON and returns a promise that resolves to the parsed JSON data. It is often used when making HTTP requests to retrieve data in JSON format.
