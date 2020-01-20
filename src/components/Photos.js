import React from "react";

export default function Photos(props) {
  return (
    <div className="myPhotos">
      <img src={props.url} className="myPhotos" alt="new computer time"></img>

      <p>{props.text}</p>
    </div>
  );
}
