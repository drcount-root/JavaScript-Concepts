## Async-Await

```
const checkAuth = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const getUser = (auth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (auth) {
        resolve({ name: "Max" });
      } else {
        reject("Not logged in!");
      }
    }, 2000);
  });
};

async function fetchUser() {
  const auth = await checkAuth(); // <- async operation, returns a promise
  const user = await getUser(auth); // <- async operation, returns a promise
  return user;
}

fetchUser().then((user) => console.log(user.name));

// Output:
// Max (after 4s)
```

In the example, you see that we still use `then()` to react to the data passed by our promise.

But before we do that, we actually use two promises (both `checkAuth()` as well as `getUser()` return a promise!) to fetch a user. Even though we work with promises here, we write code just like we write "normal", synchronous code.

How does that work?

The magic happens via two keywords: `async` and `await`. You put async in front of a function to turn it into an `asynchronous function`. Such a function will in the end always resolve as a `promise` - even though it doesn't look like one. But you could rewrite the example like this -

```
function fetchUser() {
  return checkAuth()
    .then(auth => {
      return getUser(auth)
    })
    .then(user => {
      return user
    })
}
fetchUser().then(user => console.log(user.name));
```

This also gives you a clue about what `await` does: It simply waits for a promise to resolve. It basically does the same then() does. It waits for the promise to resolve and then takes the value the promise resolved to and stores it into a variable. The code after await `checkAuth()` will only execute once it's done - it's like chaining then() calls therefore.

### What about handling errors?

Since we're now writing "synchronous" code again (we aren't), we can simply use try-catch again.

```
const checkAuth = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, 2000);
  });
};

const getUser = (auth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (auth) {
        resolve({ name: "Max" });
      } else {
        reject("Not logged in!");
      }
    }, 2000);
  });
};

const fetchUser = async () => {
  try {
    const auth = await checkAuth(); // <- async operation
    const user = await getUser(auth); // <- async operation
    return user;
  } catch (error) {
    return { name: "Default" };
  }
};

fetchUser().then((user) => console.log(user.name));

// Output:
// Max (after 4s) -> for resolve(true) inside checkAuth()

// Or

// Default (after 4s) -> for resolve(false) inside checkAuth()
```
