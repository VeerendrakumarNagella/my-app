import { useEffect, useState } from "react";
import axios from "axios";

export const useUserData = () => {
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

  return {
    users,
    posts,
    loading,
    selectedData,
    post,
    handleChange,
    handleSubmit,
    setSelectedData,
  };
};
