import React from "react";
import Button from "../../controls/Button/Button";
import { useUserData } from "./useUserData";

const UsersDataFromApi = () => {
  const {
    users,
    posts,
    loading,
    selectedData,
    post,
    handleChange,
    handleSubmit,
    setSelectedData,
  } = useUserData();

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
        <select
          value={selectedData}
          onChange={(e) => setSelectedData(e.target.value)}
        >
          <option value="users">Users data</option>
          <option value="posts">Posts data</option>
        </select>
      </div>

      {selectedData === "users" ? (
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
      ) : (
        <>
          <form>
            <div className="form-item">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                placeholder="Enter UserId"
                name="userId"
                value={post.userId}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter Title"
                value={post.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                value={post.body}
                name="body"
                placeholder="Enter body"
                onChange={handleChange}
              />
            </div>
            <Button title="Add Post" onClick={handleSubmit} />
          </form>
          <ol type="number">
            {posts.length &&
              posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
              })}
          </ol>
        </>
      )}
    </div>
  );
};

export default UsersDataFromApi;
