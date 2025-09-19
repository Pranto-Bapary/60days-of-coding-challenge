const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Pranto", email: "pranto@gmail.com" });
    } else {
      reject("Error: 404");
    }
  }, 1000);
});

const consumePromise = async () => {
  try {
    const response = await newPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromise()