import React from "react";
import Button from "../../controls/Button/Button";

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
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
          onClick={() => console.log("edit new todo")}
        />
        <Button
          type="danger"
          title="Delete"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
