import React from "react";
import "./TopNavigation.css";

interface TitleProps {
  children: React.ReactNode;
}

function TopNavigation({ children }: TitleProps) {
  return <div className="top-navigation">{children}</div>;
}

export default TopNavigation;
