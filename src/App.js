import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";

const tasks = [
  {
    name: "Organize Garage",
    id: 100,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 101,
    completed: false,
  },
  {
    name: "Do The Thing",
    id: 102,
    completed: false,
  },
  {
    name: "Study Code",
    id: 103,
    completed: false,
  },
  {
    name: "Do The Other Thing",
    id: 104,
    completed: false,
  },
  {
    name: "Get Better At Coding",
    id: 105,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addItem = (e, item) => {
    console.log("First Todo: ", this.state.tasks);
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newItem],
    });
    console.log("Second Todo: ", this.state.tasks);
  };

  toggleItem = (itemId) => {
    console.log(itemId);

    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="header">Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
