// API Using Async Await()
const printAllUsers = async () => {
  const requestUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(requestUrl);
    const data = await response.json()
    console.log(data);

  } catch (error) {
    console.log("Error: ",error)
  }
};

printAllUsers()

// API using Promise() using chaining

const printUsers = (resolve, reject) => {
  fetch("https://api.github.com/users/pranto-bapary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

printUsers()
