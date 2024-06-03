import React, { useState, useRef } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import DeleteTodoDialog from "./DeleteTodoDialog";
import UpdateTodoDialog from "./UpdateTodoDialog";

const initialTodos = [
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
];

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    id: null,
    title: "",
  });
  const [updateDialog, setUpdateDialog] = useState({
    open: false,
    id: null,
    title: "",
    completed: false,
  });
  const [todos, setTodos] = useState(initialTodos);
  const [titleError, setTitleError] = useState("");
  const [updateTitleError, setUpdateTitleError] = useState("");
  const [titleName, setTitleName] = useState("");

  const inputRef = useRef(null);
  const updateRef = useRef(null);

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
        title,
        completed,
      },
    ]);
    setTitle("");
    setCompleted(false);
  };

  const handleDeleteDialog = (todo) => {
    setDeleteDialog({
      open: true,
      id: todo.id,
      title: todo.title,
    });
  };

  const handleUpdateDialog = (todo) => {
    setUpdateDialog({
      open: true,
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    });
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== deleteDialog.id);
    setTodos(updatedTodos);
    setDeleteDialog({
      open: false,
      id: null,
      title: "",
    });
  };

  const handleUpdate = () => {
    if (!updateDialog.title) {
      setUpdateTitleError("Please enter a todo title");
      updateRef.current.focus();
      return;
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id === updateDialog.id) {
        todo.title = updateDialog.title;
        todo.completed = updateDialog.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setUpdateDialog({
      open: false,
      id: null,
      title: "",
      completed: false,
    });
  };

  const handleClose = () => {
    setDeleteDialog({
      open: false,
      id: null,
      title: "",
    });
    setUpdateDialog({
      open: false,
      id: null,
      title: "",
      completed: false,
    });
  };

  const getTitleName = (title) => {
    setTitleName(title);
  };

  return (
    <section className="todo-container container">
      <div className="todo-title">
        <h1>{titleName}</h1>
      </div>
      <AddTodo
        title={title}
        titleError={titleError}
        inputRef={inputRef}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
        setCompleted={setCompleted}
        completed={completed}
        getTitleName={getTitleName}
      />
      <TodoItems
        todos={todos}
        handleComplete={handleComplete}
        handleDeleteDialog={handleDeleteDialog}
        handleUpdateDialog={handleUpdateDialog}
      />
      {deleteDialog.open && (
        <DeleteTodoDialog
          title={deleteDialog.title}
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      )}
      {updateDialog.open && (
        <UpdateTodoDialog
          todo={updateDialog}
          handleUpdate={handleUpdate}
          handleClose={handleClose}
          setUpdateDialog={setUpdateDialog}
          updateTitleError={updateTitleError}
          updateRef={updateRef}
          setUpdateTitleError={setUpdateTitleError}
        />
      )}
    </section>
  );
};

export default TodoApp;
