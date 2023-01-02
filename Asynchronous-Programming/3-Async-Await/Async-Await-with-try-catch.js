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
