import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../controls/Button/Button";

const UsersDataFromApi = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState("users");
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    getUsers();
    getPosts();
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

  const getPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: post,
      });
      setPosts([...posts, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setPost({
        userId: "",
        title: "",
        body: "",
      });
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
