import React from "react";
import "./Title.css";

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <div className="title">{title}</div>;
}

export default Title;
