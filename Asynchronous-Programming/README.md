## Synchronous Programming

It is a way of programming in which you can perform only one task at a time and when one task is completed we move to another task. This is what we called **Blocking Code** operation because you need to wait for a task to finish to move to the next one.

```
console.log("Program Starts");
let sum = 2 + 3;
console.log(sum);
console.log("Program Ends");

// Output:
// Program Starts
// 5
// Program Ends
```

In the above code snippet, you see code will execute line by line and when an operation on one line is finished then we move to the next line so this is just a simple example of the synchronous way of programming and we do this in our daily life of programming.

## Asynchronous Programming

Asynchronous programming allows you to perform that work without blocking the main process(or thread). It’s often related to parallelization, the art of performing independent tasks in parallel, that is achieved by using asynchronous programming.
In asynchronous operation, you can move to another task before the previous one finishes, and this way you can deal with multiple requests simultaneously.

In JavaScript, a good example of asynchronous programming is setTimeout function, let's see a quick example -

```
console.log("Program Starts");
setTimeout(() => {
  console.log("Reading an user from database...");
}, 2000);
console.log("Program Ends");

// Output:
// Program Starts
// Program Ends
// Reading an user from database...
```

Our program didn't wait for setTimeout to finish, just goes for the next line, then came back to the function and prints the output. This is what we called **Non Blocking code**.

### There are three design patterns in javascript to deal with asynchronous programming -

1. [callbacks](https://github.com/drcount-root/JavaScript-Concepts/tree/main/Asynchronous-Programming/Callback-Function)
2. [promises](https://github.com/drcount-root/JavaScript-Concepts/tree/main/Asynchronous-Programming/Promise)
3. [async/await](https://github.com/drcount-root/JavaScript-Concepts/tree/main/Asynchronous-Programming/Async-Await)
