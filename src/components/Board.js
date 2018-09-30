import React from "react";
import Square from "./Square";
export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startTimer();
  }

  componentWillUnmount() {
    this.props.stopTimer();
  }

  render() {
    const boxes = Array.from({ length: 10 }, (x, row) =>
      Array.from({ length: 10 }, (y, col) => {
        const pos = col + 1 + row * 10;
        const num = (row + 1) * (col + 1);
        const correct = this.props.values[pos - 1];
        return <Square key={pos} position={pos} num={num} correct={correct} />;
      })
    );

    return (
      <div id="board">
        <div id="answer-grid">{boxes}</div>
      </div>
    );
  }
}
