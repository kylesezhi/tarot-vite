import React from "react";
import "./TarotCardImage.css";
import { Orientation } from "../../store/types";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function TarotCardImage({
  number = 78,
  orientation = "upright",
}: TarotImageProps) {
  const tarotImage = require(`../../assets/Cards/${number}.webp`);
  const style = {
    transform: `rotate(${orientation === "upright" ? 0 : 180}deg)`,
  };

  return (
    <img
      src={tarotImage}
      className="tarot-image"
      style={style}
      alt="tarot-card"
    />
  );
}

export default TarotCardImage;
