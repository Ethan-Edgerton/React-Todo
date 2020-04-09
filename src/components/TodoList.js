// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Item from "./Todo";

const TodoList = (props) => {
  return (
    <div className="container">
      <div className="Todo-List">
        {props.tasks.map((item) => (
          <Item key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
      </div>
      <div className="footer">
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
