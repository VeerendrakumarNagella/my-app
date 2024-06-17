import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";

const UserList = ({ intialUsers }) => {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const listLength = useMemo(() => {
    return intialUsers.length;
  }, [intialUsers]);

  const handleDelete = (targetUser) => {
    const newUsers = users.filter((user) => user.id !== targetUser.id);
    setUsers(newUsers);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUserSearch(value);
    // const filterData = intialUsers.filter((user) =>
    //   user.name.toLowerCase().includes(value.toLowerCase())
    // );
    // setUsers(filterData);
  };

  const getFilteredUsers = useCallback(() => {
    // below implementation is for single field search
    // const filterData = intialUsers?.length
    //   ? intialUsers.filter((user) => {
    //       return user.name.toLowerCase().includes(userSearch.toLowerCase());
    //     })
    //   : [];
    // setUsers(filterData);

    // below implementation is for multiple field search
    const filteredData =
      intialUsers?.filter((user) => {
        return Object.values(user).some((value) => {
          return value
            .toString()
            .toLowerCase()
            .includes(userSearch.toLowerCase());
        });
      }) ?? [];
    setUsers(filteredData);
  }, [intialUsers, userSearch]);

  useEffect(() => {
    if (!userSearch) {
      setUsers(intialUsers);
      return;
    }
    getFilteredUsers();
  }, [intialUsers, userSearch, getFilteredUsers]);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <br />
      <hr />
      <br />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>User List - The Intial length is {listLength} </h2>
        <div>
          <input
            type="text"
            value={userSearch}
            onChange={handleChange}
            placeholder="Search"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.length ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleDelete(user)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
