import React from "react";
import Footer from "./Footer";
import countCorrect from "../utils/countCorrect";

export default class Finish extends React.Component {
  render() {
    const messages = [
      "You Did It!",
      "All Done!",
      "Game Over!",
      "Great Job!",
      "It's All Over!",
      "Next!"
    ];
    return (
      <React.Fragment>
        <article>
          <div id="intro">
            <h1>{messages[Math.floor(Math.random() * messages.length)]}</h1>
            <div id="results">
              <div className="list">
                <h2>
                  Correct: {countCorrect(this.props.score)}/
                  {this.props.score.length}
                </h2>
              </div>
              <div className="list">
                <h2>
                  Time: {Number(this.props.time / 1000).toFixed(1)} seconds
                </h2>
                (avg.{" "}
                {Number(
                  this.props.time / 1000 / this.props.score.length
                ).toFixed(2)}
                /sec per answer)
              </div>
            </div>

            <button
              onClick={() => this.props.onClick()}
              className="xl"
              id="start"
            >
              Play Again
            </button>
          </div>
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}
