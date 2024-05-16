import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import ResumeContainer from "./components/resume-conatiner/ResumeContainer";
// import SimpleButtonContainer from "./components/SimpleButtonContainer";
// import Counter from "./components/Counter";
// import UsersTable from "./components/users-table/UsersTable";
import Button from "./controls/Button/Button";
// import Register from "./components/register/Register";
// import Login from "./components/login/Login";
// import UsersDataFromApi from "./components/users-table/UsersDataFromApi";
import PageNotFound from "./components/common/PageNotFount";
// import TodoApp from "./components/todo-app/TodoApp";

const ResumeContainer = lazy(() =>
  import("./components/resume-conatiner/ResumeContainer")
);
const SimpleButtonContainer = lazy(() =>
  import("./components/SimpleButtonContainer")
);
const Counter = lazy(() => import("./components/Counter"));
const UsersTable = lazy(() => import("./components/users-table/UsersTable"));
const Register = lazy(() => import("./components/register/Register"));
const Login = lazy(() => import("./components/login/Login"));
const UsersDataFromApi = lazy(() =>
  import("./components/users-table/UsersDataFromApi")
);
const TodoApp = lazy(() => import("./components/todo-app/TodoApp"));

const Router = () => {
  return (
    <Suspense fallback={<h3>Loading......</h3>}>
      <Routes>
        <Route path="/" element={<ResumeContainer />} />
        <Route path="/resume" element={<ResumeContainer />} />
        <Route path="/simple-button" element={<SimpleButtonContainer />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users-table" element={<UsersTable />} />
        <Route path="/users-api" element={<UsersDataFromApi />} />
        <Route path="/button" element={<Button title="Simple" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
