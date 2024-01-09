import React from "react";
import "./Keywords.css";
import Keyword from "../Keyword/Keyword";

interface KeywordsProps {
  children: Array<string>;
}

function Keywords({ children }: KeywordsProps) {
  return (
    <div className="keywords">
      {children.map((keyword: string, index: number) => (
        <Keyword key={index} keyword={keyword} />
      ))}
    </div>
  );
}

export default Keywords;
