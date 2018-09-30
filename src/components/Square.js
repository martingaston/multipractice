import React from "react";

export default props => {
  if (!props.correct) {
    return <span className={`sum box${props.position}`}>{props.num}</span>;
  }
  return props.correct === "correct" ? (
    <span className={`correct sum box${props.position}`}>{props.num}</span>
  ) : (
    <span className={`incorrect sum box${props.position}`}>{props.num}</span>
  );
};
