import { useContext } from "react";
import Button from "../../controls/Button/Button";
import { CounterContext } from "./counterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Counter value is: <strong>{counter}</strong>
      </p>
      <Button
        title="Increment"
        onClick={() => setCounter((prev) => prev + 1)}
        type="success"
      />
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
