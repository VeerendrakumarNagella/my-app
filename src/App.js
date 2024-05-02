import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import ResumeContainer from "./components/resume-conatiner/ResumeContainer";
import SimpleButtonContainer from "./components/SimpleButtonContainer";
import Counter from "./components/Counter";
import UsersTable from "./components/users-table/UsersTable";
import Button from "./controls/Button/Button";
import Register from "./components/register/Register";
import "./assets/css/resume.css";
import "./assets/css/button.css";
import "./assets/css/users-table.css";
import "./assets/css/register.css";
import "./assets/css/header.css";
import Login from "./components/login/Login";
import UsersDataFromApi from "./components/users-table/UsersDataFromApi";
import PageNotFound from "./components/common/PageNotFount";

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
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/resume" element={<ResumeContainer />} />
          <Route path="/simple-button" element={<SimpleButtonContainer />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users-table" element={<UsersTable />} />
          <Route path="/users-api" element={<UsersDataFromApi />} />
          <Route path="/button" element={<Button title="Simple" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
