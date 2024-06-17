import UserList from "./practice/UserList";

const App = () => {
  const intialUsers = [
    { id: 1, name: "John Doe", email: "john@mail.com", phone: "1234567890" },
    { id: 2, name: "Jane Doe", email: "jane@mail.com", phone: "0987654321" },
    {
      id: 3,
      name: "John Smith",
      email: "smith@gmail.com",
      phone: "1234509876",
    },
    {
      id: 4,
      name: "Jane Smith",
      email: "test@mail.com",
      phone: "0987612345",
    },
    { id: 5, name: "trinadh", email: "mail@mail.com", phone: "0987612345" },
    { id: 6, name: "trilokh", email: "mail@mail.com", phone: "0987612345" },
    { id: 7, name: "sai", email: "mail@mail.com", phone: "0987612345" },
  ];

  return (
    <div>
      <h2>Hello, World</h2>
      <br />
      <UserList intialUsers={intialUsers} />
    </div>
  );
};

export default App;
