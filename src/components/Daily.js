import React from "react";

export default function Daily(props) {
  return (
    <div classname="Daily">
      <h1>Today you need to:</h1>
      <p>{props.text}</p>
    </div>
  );
}
