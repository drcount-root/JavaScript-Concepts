### setTimeout()

The `setTimeout()` function is part of the `window object`.

`setTimeout()` is a JavaScript function that allows you to execute a function after a specified amount of time has passed. It is often used to create a delay before an action is performed, or to schedule a task to be performed at a later time.

Here is an example of how setTimeout can be used:

```
function sayHello() {
  console.log("Hello!");
}

setTimeout(sayHello, 1000);

// Output:
// "Hello!" (after delay of 1 second / 1000 milliseconds)
```

In this example, the sayHello function will be executed after a delay of 1 second (1000 milliseconds). 

The first argument to setTimeout() is the function that you want to execute, and the second argument is the amount of time to wait before executing the function, in milliseconds.


When `setTimeout()` is called, it starts a timer and returns a value that can be used to cancel the timer using the `clearTimeout()` function and prevent the sayHello() function from being executed.

```
function sayHello() {
  console.log("Hello!");
}

let timeout = setTimeout(sayHello, 1000); // Schedules the sayHello function to be executed after 1 second

clearTimeout(timeout); // Cancels the scheduled sayHello function
```

### Why setTimeout(() => {}, 0) wait for previous tasks to complete ?

When setTimeout is called with a delay of 0 milliseconds, the task is added to the end of the task queue and will be executed as soon as all of the tasks that are ahead of it in the queue have been completed.

setTimeout with a delay of 0 milliseconds does not actually create a delay. It simply adds the task to the task queue to be executed as soon as possible. Because the task is added to the end of the queue, it will be executed after all of the tasks that are ahead of it in the queue have been completed.

```
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout 1
```
In this example, the console.log('Timeout 1') statement is added to the task queue with a delay of 0 milliseconds. However, it is not executed immediately because there are other tasks ahead of it in the queue. It is executed after all of the other tasks have been completed, which is why it is logged last.



<br>
<br>

# Not completed
## Microtask Queue & Macrotask Queue
JavaScript has two types of task queues: the microtask queue and the macrotask queue. The microtask queue (also known as the "job queue") is used to queue up microtasks, which are small pieces of work that are executed as soon as possible. The macrotask queue is used to queue up macrotasks, which are larger pieces of work that are executed after all microtasks have been completed.

The setTimeout function is a macrotask, so it is added to the macrotask queue. When the timer expires, the callback function passed to setTimeout is added to the microtask queue to be executed as soon as possible.