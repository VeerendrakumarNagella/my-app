import React from "react";
import Router from "./Router";
import Header from "./components/header/Header";
import { UserNameContext } from "./components/context/userDetialsContext";
import { LoginContext } from "./components/context/isLoginContext";
import { CounterContext } from "./components/counter/counterContext";
import { useCounter } from "./components/counter/useCounter";

const Main = () => {
  const { counter, setCounter } = useCounter();
  const isLogged = true;
  const userName = "John Doe";

  return (
    <LoginContext.Provider value={{ isLogged }}>
      <UserNameContext.Provider value={{ userName }}>
        <div>
          <Header />
          <div style={{ padding: "20px" }}>
            <CounterContext.Provider value={{ counter, setCounter }}>
              <Router isLogged={isLogged} />
            </CounterContext.Provider>
          </div>
        </div>
      </UserNameContext.Provider>
    </LoginContext.Provider>
  );
};

export default Main;
