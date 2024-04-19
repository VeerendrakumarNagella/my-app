import React, { useState, Fragment } from "react";
import usersData from "./userData.json";
import Button from "../../controls/Button/Button";

const UsersTable = () => {
  const [users, setUsers] = useState(usersData);
  const [isListFormat, setIsListFormat] = useState(false);

  const handleDelete = (selectedUser) => {
    const newUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(newUsers);
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
        <h2>Users Data</h2>
        <Button
          title={isListFormat ? "Show Table Format" : "Show List Format"}
          onClick={() => setIsListFormat(!isListFormat)}
        />
      </div>

      {isListFormat ? (
        <ul>
          {users.length ? (
            users.map((user) => {
              return (
                <Fragment key={user.id}>
                  <li>
                    <span>
                      {user.name} - {user.age} - {user.city}
                    </span>
                    &nbsp; &nbsp;
                    <Button
                      title="Delete"
                      type="danger"
                      onClick={() => handleDelete(user)}
                    />
                  </li>
                  <hr />
                </Fragment>
              );
            })
          ) : (
            <li>No data available</li>
          )}
        </ul>
      ) : (
        <table className="usersTable">
          <thead>
            <tr>
              <th>S. No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user, index) => {
                // Key is used to identify the element in the list and it should be unique for each element in the list and it should be a string or number and it should not be an object or array or any other data type because to identify the element in the list react uses the key to identify the element in the list
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                      <Button
                        title="Delete"
                        type="danger"
                        onClick={() => handleDelete(user)}
                      />
                    </td>
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
      )}
    </div>
  );
};

export default UsersTable;
