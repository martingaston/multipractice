import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        autoComplete="off"
        id="answer-form"
      >
        <input
          value={this.props.currentAnswer}
          onChange={this.props.handleInput}
          type="number"
          min="1"
          max="100"
          id="answer"
          placeholder="Enter your answer..."
          required
        />
        <button type="submit" id="submit" name="submit" value="Submit">
          Am I right?
        </button>
      </form>
    );
  }
}
