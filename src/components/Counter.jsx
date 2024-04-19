import { useState, useEffect } from "react";
import Button from "../controls/Button/Button";

const Counter = ({ owner, age }) => {
  // const { owner } = props;

  const [userFullName, setUserFullName] = useState("John");
  const [counter, setCounter] = useState(0);

  // let user = "hello user";

  const handleChangeName = () => {
    // console.log("User Name top", userFullName); // John
    setUserFullName("Jane"); // setState is async
    // console.log("User Name bottom", userFullName); // John

    // console.log("User Name top", user); // hello user
    // user = "Jane";
    // console.log("User Name bottom", user); // Jane
  };

  // console.log("User Name outside", userFullName);

  // console.log("Counter", counter);

  // const handleCounter = (value) => {
  //   // setCounter(value); // sync it will update the value immediately
  //   setTimeout(() => {
  //     setCounter(value); // async it will update the value after 2 seconds, it will give the wrong value if we use the value in the same function
  //   }, 2000);
  // };

  // useEffect(function() {}, [])
  useEffect(() => {
    console.log("Component Did Mount");

    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    if (counter === 9) {
      alert("Counter reached to 9");
    }
  }, [counter]);

  useEffect(() => {
    console.log("userFullName Value is", userFullName);
  }, [userFullName]);

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
        onClick={() => setCounter((prevVal) => prevVal + 1)}
        type="success"
        userFullName={userFullName}
        owner={owner}
      />
      {/* <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button> */}
      <Button
        onClick={() => setCounter((prev) => prev - 1)}
        title="Decrement"
        type="danger"
        userFullName={userFullName}
        owner={owner}
      />
      <Button
        onClick={() => setCounter(0)}
        title="Reset"
        type="warning"
        userFullName={userFullName}
        owner={owner}
      />
    </div>
  );
};

export default Counter;
