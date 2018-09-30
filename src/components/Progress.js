import React from "react";

export default function Progress(props) {
  return (
    <div id="progress">
      <div
        className="progressing"
        style={{
          width: `${props.percent}%`
        }}
      />
    </div>
  );
}
