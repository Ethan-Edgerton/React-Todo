import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();

    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.submitItem}>
        <input
          placeholder=" Add A Todo!"
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default TodoForm;
