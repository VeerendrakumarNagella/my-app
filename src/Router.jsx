import { lazy, Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Button from "./controls/Button/Button";
import PageNotFound from "./components/common/PageNotFount";
import { LoginContext } from "./components/context/isLoginContext";

const ResumeContainer = lazy(() =>
  import("./components/resume-conatiner/ResumeContainer")
);
const SimpleButtonContainer = lazy(() =>
  import("./components/SimpleButtonContainer")
);
const Counter = lazy(() => import("./components/counter/Counter"));
const UsersTable = lazy(() => import("./components/users-table/UsersTable"));
const Register = lazy(() => import("./components/register/Register"));
const Login = lazy(() => import("./components/login/Login"));
const UsersDataFromApi = lazy(() =>
  import("./components/users-table/UsersDataFromApi")
);
const TodoApp = lazy(() => import("./components/todo-app/TodoApp"));

const Router = () => {
  const { isLogged } = useContext(LoginContext);

  return (
    <Suspense fallback={<h3>Loading......</h3>}>
      {isLogged ? (
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
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default Router;
