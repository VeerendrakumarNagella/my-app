import React from "react";
import Router from "./Router";
import { BrowserRouter, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/simple-button">Simple Button</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/users-table">Users Table</NavLink>
            <NavLink to="/users-api">Users API </NavLink>
            <NavLink to="/button">Button</NavLink>
            <NavLink to="/todo-app">Todo App</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </header>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
