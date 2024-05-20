import React from "react";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";
import Button from "../../controls/Button/Button";

const AddTodo = ({
  title,
  titleError,
  inputRef,
  handleChange,
  handleAddTodo,
  setCompleted,
  completed,
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
        <Switch
          checked={completed}
          onChange={(_e, checked) => setCompleted(checked)}
        />
        <Button title="Add" onClick={handleAddTodo} />
      </div>
      {titleError && <p className="error">*{titleError}</p>}
    </div>
  );
};

AddTodo.propTypes = {
  title: PropTypes.string.isRequired,
  titleError: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
  setCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default AddTodo;
