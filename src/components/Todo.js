import React from "react";

const Item = (props) => {
  console.log("Item Props:", props.item);
  return (
    <div
      className={`item${props.item.completed ? " Completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
