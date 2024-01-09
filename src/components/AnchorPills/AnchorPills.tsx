import React, { ReactNode } from "react";
import "./AnchorPills.css";

interface KeywordsProps {
  children: ReactNode;
}

function AnchorPills({ children }: KeywordsProps) {
  return <div className="anchor-pills">{children}</div>;
}

export default AnchorPills;
