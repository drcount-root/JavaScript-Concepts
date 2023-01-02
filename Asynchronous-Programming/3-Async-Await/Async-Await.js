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

//
//
//
//
// Async Function expression

// const fetchUser = async () {
//      ...
//      ...
// }

// const fetchUser = async () => { ... }
