import React from "react";
import Button from "../../controls/Button/Button";

const AddTodo = ({
  title,
  titleError,
  inputRef,
  handleChange,
  handleAddTodo,
}) => {
  return (
    <div className="add-todo">
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new todo"
          className="new-todo"
          onChange={handleChange}
          value={title}
          ref={inputRef}
        />
        <Button title="Add" onClick={handleAddTodo} />
      </div>
      {titleError && <p className="error">*{titleError}</p>}
    </div>
  );
};

export default AddTodo;
