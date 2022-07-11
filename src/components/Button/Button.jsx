import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button style={{ padding: 20, margin: 20, fontSize: 20 }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
