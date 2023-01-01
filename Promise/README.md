## Promise

A promise is simply a placeholder for an asynchronous task which is yet to be completed.

Promise is an object that represents the completion or failure of an asynchronous operation.

When you define a promise object in your script, instead of returning a value immediately, it returns a promise.

A promise in JavaScript is asynchronous, meaning it takes time to resolve or finish.

And allows you to specify a callback function to be called when the value becomes available (Promise get resolved).



There are 3 states of Promise -

1. `Pending` : The initial state of a promise, indicating that the asynchronous operation has not yet completed.
2. `Resolved (Fulfilled)` : The state of a promise representing a successful completion of the asynchronous operation.
3. `Rejected` : The state of a promise representing a failed completion of the asynchronous operation.

### Example

```
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
});

myPromise.then(value => {
  console.log(value);  // 'Hello, world!'
});
```

In this example, the promise is created using the `Promise` **constructor**, which takes a function as an argument. This function, called the **"executor function,"** is responsible for performing the asynchronous operation. It receives two arguments: `resolve` and `reject`. When the asynchronous operation is complete, the executor function should call resolve with the value that the promise should fulfill with. If the operation fails, the executor should call reject with the reason for the failure.

The `then` method of the promise allows you to specify a **callback function** to be called when the promise is **fulfilled**. In this example, the callback function simply logs the value of the promise to the console.

What is **new** keyword before Constructor ?

> In JavaScript, the new keyword is used to create an instance of an object. When you use the new keyword to create an instance of an object, the following steps occur: <br>1. A new object is created. <br>2. The object is returned. <br>3. The object's prototype is set to the prototype property of the constructor function. <br>4. The this keyword is set to the new object inside the constructor function. <br>5. The constructor function is called with the arguments specified in the new expression.

What is **new** keyword before Promise Constructor ?

> In the case of the Promise constructor, the new keyword is used to create a new instance of a Promise object. The Promise constructor takes a function as an argument, which is called the "executor function." This function is responsible for performing the asynchronous operation that the promise represents.

Here is an example of using the new keyword to create a Promise object:

```
const myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
});
```

In this example, a new Promise object is created and assigned to the myPromise variable. The Promise constructor is called with the executor function as an argument, and the new keyword sets the this keyword inside the executor function to the new Promise object.

<br>

### A good example of promise in real life - Resume selection process for job opportunity

If the return value of the interview (promise) is a “success” (resolved/fulfilled), the candidate will get a position. If it fails, we proceed to reject his application.

With JavaScript promises, we do this by using a callback function (`promise handlers`). These functions are defined in a nested `then()` method.

To specify what callbacks to call, you use the following two functions:

`resolve(value)`: This indicates that the asynchronous task was successful. This will call the fulfillment callback in the then() handler.

`reject(error)`: This indicates an error while trying to run the asynchronous task. This will call the rejection callback in the then() handler.
