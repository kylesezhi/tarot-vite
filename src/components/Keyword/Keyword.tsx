import React from "react";
import "./Keyword.css";

interface KeywordProps {
  keyword: string;
}

function Keyword({ keyword }: KeywordProps) {
  return <div className="keyword">{keyword}</div>;
}

export default Keyword;
