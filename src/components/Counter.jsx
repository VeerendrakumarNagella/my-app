import { useState } from "react";
import Button from "../controls/Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Counter value is: <strong>{counter}</strong>
      </p>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button> */}
      <Button
        title="Increment"
        onClick={() => {
          // setCounter(counter + 1);
          setTimeout(() => {
            // setCounter(counter + 1);
            setCounter((prevVal) => prevVal + 1);
          }, 1000);
          // setCounter((prev) => prev + 1);
          // setCounter((prev) => prev + 1);
          // setCounter((prev) => prev + 1);
        }}
        type="success"
      />
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button> */}
      <Button
        onClick={() => setCounter((prev) => prev - 1)}
        title="Decrement"
        type="danger"
      />
      <Button onClick={() => setCounter(0)} title="Reset" type="warning" />
    </div>
  );
};

export default Counter;
