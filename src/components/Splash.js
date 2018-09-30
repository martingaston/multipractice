import React from "react";
export default function(props) {
  return (
    <article>
      <div id="intro">
        <h1>Times Table Tester</h1>
        <button onClick={() => props.onClick()} className="xl" id="start">
          Start
        </button>
      </div>
    </article>
  );
}
