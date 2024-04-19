import React, { useState } from "react";
import Button from "../../controls/Button/Button";

const Register = () => {
  const intialUserValues = {
    fullName: "",
    email: "",
    password: "",
    dob: "",
    age: "",
    country: "",
    gender: "",
    lang: [],
    comments: "",
  };
  const [user, setUser] = useState(intialUserValues);

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    if (type === "checkbox") {
      if (user.lang.includes(value)) {
        setUser({
          ...user,
          lang: user.lang.filter((lang) => lang !== value),
        });
      } else {
        setUser({
          ...user,
          lang: [...user.lang, value],
        });
      }
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUser(intialUserValues);
  };

  return (
    <div className="register user-form">
      <h2>Register User</h2>

      <form>
        <div className="form-group">
          <div className="form-element">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="text-input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              value={user.fullName}
              onChange={handleChange}
            />
          </div>
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
          <div className="form-element">
            <label htmlFor="dob">Date of Birth</label>
            <input
              className="text-input"
              type="date"
              id="dob"
              name="dob"
              placeholder="Enter Date of Birth"
              value={user.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="age">Age</label>
            <input
              className="text-input"
              type="number"
              id="age"
              name="age"
              placeholder="Enter Age"
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="country">Country</label>
            <select
              className="text-input"
              id="country"
              name="country"
              placeholder="Enter Country"
              value={user.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="form-element">
            <div>
              <label htmlFor="male">Male: </label>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="female">Female: </label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-element">
            <div>
              <label htmlFor="english">English: </label>
              <input
                id="english"
                type="checkbox"
                name="lang"
                value="english"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="hindi">Hindi: </label>
              <input
                id="hindi"
                type="checkbox"
                name="lang"
                value="hindi"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="telugu">Telugu: </label>
              <input
                id="telugu"
                type="checkbox"
                name="lang"
                value="telugu"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-element">
            <label htmlFor="comments">Comments</label>
            <textarea
              className="text-input"
              id="comments"
              name="comments"
              placeholder="Enter Comments"
              value={user.comments}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-element button-group">
            <Button title="Register" onClick={handleSubmit} />
            <Button title="Reset" type="danger" onClick={handleReset} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
