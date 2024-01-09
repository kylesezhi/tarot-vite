import React from "react";
import "./BackChevron.css";
import chevron from "./assets/chevron-left.svg";

function BackChevron({ show = true }) {
  const style = {
    opacity: show ? "0.3" : "0",
  };
  return (
    <div className="back-chevron">
      <img
        src={chevron}
        className="back-chevron-image"
        alt="back-chevron"
        style={style}
      />
    </div>
  );
}

export default BackChevron;
