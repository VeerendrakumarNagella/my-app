import React from "react";

const Button = (props) => {
  const { type, title, onClick } = props;

  return (
    <button className={`btn btn-${type || "primary"}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
