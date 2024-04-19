import React, { useState } from "react";
// import ResumeContainer from "./components/resume-conatiner/ResumeContainer";
import "./assets/css/resume.css";
import "./assets/css/button.css";
import "./assets/css/users-table.css";
import "./assets/css/register.css";
// import SimpleButtonContainer from "./components/SimpleButtonContainer";
// import Counter from "./components/Counter";
// import UsersTable from "./components/users-table/UsersTable";
// import Button from "./controls/Button/Button";
import Register from "./components/register/Register";

const App = () => {
  // const owner = "John Doe";
  // const age = 25;
  // const [isCounterShow, setIsCounterShow] = useState(false);

  return (
    <div>
      {/* <ResumeContainer /> */}
      {/* <SimpleButtonContainer /> */}
      {/* <Button
        onClick={() => setIsCounterShow(!isCounterShow)}
        title=" Show / Hide"
      />

      {isCounterShow && <Counter owner={owner} age={age} />}
      <hr />

      <UsersTable /> */}

      <Register />
    </div>
  );
};

export default App;
