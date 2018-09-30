import React from "react";
import ReactDOM from "react-dom";

import "./scss/style.scss";

// IMPORT COMPONENTS

import Board from "./components/Board";
import Input from "./components/Input";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import Progress from "./components/Progress";
import Finish from "./components/Finish";

// IMPORT UTILS

import createTable from "./utils/createTable";
import shuffleTable from "./utils/shuffleTable";
import checkMove from "./utils/checkMove";
import checkBox from "./utils/checkBox";

// <App /> handles all stage logic and is therefore our single source of truth

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ board: Array(100).fill(null) }],
      shuffled: shuffleTable(createTable(10)),
      started: false,
      position: 0,
      currentAnswer: "",
      timerIsOn: false,
      timerElapsed: 0,
      timerStart: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  updateTimer() {
    this.setState({ timerElapsed: Date.now() - this.state.timerStart });
    console.log(this.state.timerElapsed);
  }

  startTimer() {
    this.setState({
      timerIsOn: true,
      timerStart: Date.now()
    });
    this.timer = setInterval(this.updateTimer, 1000);
  }

  clearTimer() {
    clearInterval(this.timer);
  }

  handleReset() {
    this.setState({
      history: [{ board: Array(100).fill(null) }],
      shuffled: shuffleTable(createTable(10)),
      started: true,
      position: 0,
      currentAnswer: "",
      timerIsOn: false,
      timerElapsed: 0,
      timerStart: 0
    });
  }

  // Handle the typed answers from <Input />
  handleInput(event) {
    this.setState({ currentAnswer: event.target.value });
  }

  // <Input /> submit checks move, updates history and progresses game
  handleSubmit(event) {
    const answer = this.state.currentAnswer;
    const position = this.state.position;
    const currentQuery = this.state.shuffled[this.state.position];
    const history = this.state.history;
    const current = history[history.length - 1];
    const board = current.board.slice();

    event.preventDefault();
    if (checkMove(currentQuery, answer)) {
      board[checkBox(currentQuery)] = "correct";
    } else {
      board[checkBox(currentQuery)] = "incorrect";
    }
    this.setState({
      history: history.concat([{ board: board }]),
      position: position + 1,
      currentAnswer: ""
    });
  }

  // <Splash /> originally appears, and clicking its button starts the game proper
  toggleStart() {
    this.setState(state => {
      return { started: !state.started };
    });
  }

  render() {
    if (!this.state.started) {
      return <Splash onClick={() => this.toggleStart()} />;
    }
    const history = this.state.history;
    const position = this.state.position;
    const current = history[history.length - 1];
    const progress = (position / 100) * 100;
    if (this.state.position === 99) {
      return (
        <Finish
          onClick={this.handleReset}
          score={current.board}
          time={this.state.timerElapsed}
        />
      );
    }
    return (
      <React.Fragment>
        <Progress percent={progress} />
        <article>
          <div id="main">
            <h1>
              <span id="sum">
                {this.state.shuffled[this.state.position][0]}x
                {this.state.shuffled[this.state.position][1]}
              </span>
            </h1>
            <Input
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              currentAnswer={this.state.currentAnswer}
            />
            <Board
              stopTimer={this.clearTimer}
              startTimer={this.startTimer}
              values={current.board}
            />
          </div>
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}

/* eslint-disable-next-line no-undef */
ReactDOM.render(<App />, document.getElementById("root"));
