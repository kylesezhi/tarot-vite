import React from "react";
import "./Description.css";

interface DescriptionProps {
  children: string;
}

function Description({ children }: DescriptionProps) {
  return <div className="description">{children}</div>;
}

export default Description;
