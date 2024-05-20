import React from "react";
import PropTypes from "prop-types";
import Button from "../../controls/Button/Button";

const TodoItem = ({
  todo,
  handleComplete,
  handleDeleteDialog,
  handleUpdateDialog,
}) => {
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : "no"} `}
      key={todo.id}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo.id)}
        />
        <span>{todo.title}</span>
      </div>

      <div className="btn-container">
        <Button
          type="info"
          title="Edit"
          onClick={() => handleUpdateDialog(todo)}
        />
        <Button
          type="danger"
          title="Delete"
          onClick={() => handleDeleteDialog(todo)}
        />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDeleteDialog: PropTypes.func.isRequired,
  handleUpdateDialog: PropTypes.func.isRequired,
};

export default TodoItem;
