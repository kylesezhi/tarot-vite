import React from "react";
import "./CardName.css";
import { getTitle } from "../../utils/helpers";

interface TitleProps {
  title: string;
}

function CardName({ title }: TitleProps) {
  return <div className="card-name">{getTitle(title, "upright")}</div>;
}

export default CardName;
