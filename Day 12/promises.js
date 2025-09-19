const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      console.log("Promise Consumed");
      resolve({ name: "Pranto", student: true });
    } else {
      reject("Error: 404");
      console.log("Error occured");
    }
  }, 1000);
});

promiseOne
  .then((user) => {
    console.log("Promise Resolved");
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally the promise either resolved or rejected");
  });
