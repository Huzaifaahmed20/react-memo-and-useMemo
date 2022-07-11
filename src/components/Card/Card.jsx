import { memo } from "react";

const Card = ({ title, description }) => {
  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "red",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default memo(Card);
