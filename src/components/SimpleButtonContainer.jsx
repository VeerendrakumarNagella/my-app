import { useState } from "react";

const SimpleButtonContainer = () => {
  const [userFullName, setUserFullName] = useState("John Doe");
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setUserFullName("Jane Doe");
  };

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrement = () => {
  //   setCounter(counter - 1);
  // };

  // const handleReset = () => {
  //   setCounter(0);
  // };

  const handleCounter = (value) => {
    setCounter(value);
  };

  return (
    <div>
      <h2>User Name is {userFullName}</h2>
      <button onClick={handleClick}>Simple Button</button>
      <br />
      <hr />
      <h2>Counter value is: {counter}</h2>
      {/* <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button> */}
      {/* <button
        onClick={function () {
          handleCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => handleCounter(counter - 1)}>Decrement</button>
      <button onClick={() => handleCounter(0)}>Reset</button> */}

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default SimpleButtonContainer;
