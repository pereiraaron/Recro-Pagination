import React from "react";

const Card = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Card;
