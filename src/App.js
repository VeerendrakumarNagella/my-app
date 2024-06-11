import { useState } from "react";
import UserList from "./practice/UserList";

const App = () => {
  const [userName, setUserName] = useState("John Doe");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@mail.com", phone: "1234567890" },
    { id: 2, name: "Jane Doe", email: "jane@mail.com", phone: "0987654321" },
    {
      id: 3,
      name: "John Smith",
      email: "smith@gmail.com",
      phone: "1234509876",
    },
  ]);

  const handleClick = () => {
    setUserName("Sai");
    console.log(userName);
    // This will still log "John Doe" because the state has not been updated yet, and the component has not been re-rendered
  };

  const handleDelete = (targetUser) => {
    const newUsers = users.filter((user) => user.id !== targetUser.id);
    setUsers(newUsers);
  };

  return (
    <div>
      <h2>Hello, {userName}</h2>
      <button onClick={handleClick}>Change Name</button>

      <br />
      <UserList userName={userName} handleDelete={handleDelete} users={users} />
    </div>
  );
};

export default App;
