import React, { ReactNode } from "react";
import "./CardGroup.css";

interface CardGroupProps {
  children: ReactNode;
}

function CardGroup({ children }: CardGroupProps) {
  return <div className="card-group">{children}</div>;
}

export default CardGroup;
