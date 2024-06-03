import React from "react";
import Router from "./Router";
import Header from "./components/header/Header";

const App = () => {
  const isLogged = false;

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <Router isLogged={isLogged} />
      </div>
    </div>
  );
};

export default App;
