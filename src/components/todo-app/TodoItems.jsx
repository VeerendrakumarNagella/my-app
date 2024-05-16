import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todos, handleComplete, handleDelete }) => {
  return (
    <div className="todo-list">
      <div>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
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

export default TodoItems;
