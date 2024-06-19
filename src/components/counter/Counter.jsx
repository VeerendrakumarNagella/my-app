// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../controls/Button/Button";
import { decrement, increment, reset } from "../../redux/actions/counterAction";

// import { CounterContext } from "./counterContext";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterReducer);

  // const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Counter value is: <strong>{counter}</strong>
      </p>
      <Button
        title="Increment"
        onClick={() => dispatch(increment())}
        // onClick={() => setCounter((prev) => prev + 1)}
        type="success"
      />
      <Button
        onClick={() => dispatch(decrement())}
        // onClick={() => setCounter((prev) => prev - 1)}
        title="Decrement"
        type="danger"
      />
      <Button
        onClick={() => dispatch(reset())}
        // onClick={() => setCounter(0)}
        title="Reset"
        type="warning"
      />
    </div>
  );
};

export default Counter;
