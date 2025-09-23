import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    if (counter >= 0 && counter <= 19) {
      setCounter(counter + 1);
    } else {
      alert("Sorry, you can't update the counter values further.");
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Hey, counter values can't be negative.");
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="counter-wrapper">
      <h1>Pranto's Counter App</h1>
      <h3>Counter Value: {counter}</h3>
      <button className="one" onClick={incrementCounter}>
        Increment
      </button>
      <button className="two" onClick={decrementCounter}>
        Decrement
      </button>
      <button className="three" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default App;
