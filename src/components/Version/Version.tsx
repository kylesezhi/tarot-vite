import React from "react";
import "./Version.css";

function Version() {
  return <div className="version">{process.env.REACT_APP_VERSION}</div>;
}

export default Version;
