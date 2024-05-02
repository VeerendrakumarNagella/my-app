import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersDataFromApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  /**  Using Fetch */
  // const getUsers = async () => {
  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const usersData = await data.json();
  //     setUsers(usersData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.log(err));
  // };

  /** Using Axios */
  // const getUsers = () => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  // };

  const getUsers = async () => {
    setLoading(true);
    try {
      // const res = await axios("https://jsonplaceholder.typicode.com/users");
      // setUsers(res.data);

      // const { data } = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // setUsers(data);

      // 2xx, 3xx, 4xx, 5xx => 2xx, 3xx => then block, 4xx, 5xx => catch block
      const { data } = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="users-data">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 20px",
        }}
      >
        <h2>Users Data From API</h2>
      </div>

      <table className="usersTable">
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading....</td>
            </tr>
          ) : users.length ? (
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDataFromApi;
