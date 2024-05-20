import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItems = ({
  todos,
  handleComplete,
  handleDeleteDialog,
  handleUpdateDialog,
}) => {
  return (
    <div className="todo-list">
      <div>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                handleComplete={handleComplete}
                handleDeleteDialog={handleDeleteDialog}
                handleUpdateDialog={handleUpdateDialog}
                key={todo.id}
              />
            );
          })
        ) : (
          <div className="no-todos">
            <h2>No todos found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDeleteDialog: PropTypes.func.isRequired,
  handleUpdateDialog: PropTypes.func.isRequired,
};

export default TodoItems;
