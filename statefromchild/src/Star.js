
import React from "react";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";

function Star(props) {
  const starIcon = props.isFilled ? starFilled : starEmpty;
  return (
    <img
      src={starIcon}
      className="card--favorite"
      onClick={props.handleClick}
      alt="Star Icon"
    />
  );
}

export default Star;
