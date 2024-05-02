import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../controls/Button/Button";

const Login = () => {
  const intialUserValues = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(intialUserValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleRegester = () => {
    navigate("/register");
  };

  return (
    <div className="Login user-form">
      <h2>Login User</h2>

      <form>
        <div className="form-group">
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              className="text-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input
              className="text-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-element button-group">
            <Button title="Login" onClick={handleSubmit} />
            <Button title="Register" type="danger" onClick={handleRegester} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
