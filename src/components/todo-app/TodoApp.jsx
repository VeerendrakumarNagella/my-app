import React, { useState, useRef } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: true,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ]);
  const [titleError, setTitleError] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setTitleError("");
    } else {
      setTitleError("Please enter a todo title");
    }
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (!title) {
      setTitleError("Please enter a todo title");
      inputRef.current.focus();
      return;
    }
    const isExist = todos.find(
      (todo) => todo.title.trim().toLowerCase() === title.trim().toLowerCase()
    );
    if (isExist) {
      setTitleError("Todo already exists");
      inputRef.current.focus();
      return;
    }

    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 999999) + 1,
        title: title,
        completed: false,
      },
    ]);
    setTitle("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <section className="todo-container container">
      <div className="todo-title">
        <h1>Todo App</h1>
      </div>
      <AddTodo
        title={title}
        titleError={titleError}
        inputRef={inputRef}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
      />
      <TodoItems
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </section>
  );
};

export default TodoApp;
