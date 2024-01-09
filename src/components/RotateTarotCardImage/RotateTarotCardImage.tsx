import React, { useState } from "react";
import { useGesture } from "react-use-gesture";
import "./RotateTarotCardImage.css";
import { Orientation } from "../../store/types";
import { animated, config, useSpring } from "@react-spring/web";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function RotateTarotCardImage({
  number = 78,
  orientation = "upright",
}: TarotImageProps) {
  const ZOOM_IN = 0.1;
  const ZOOM_OUT = -0.1;

  const [zoom, setZoom] = useState(0);
  const tarotImage = require(`../../assets/Cards/${number}.webp`);

  const { transform, scale } = useSpring({
    transform: `rotate(${orientation === "reversed" ? "180" : "0"}deg)`,
    scale: 1 + zoom,
    config: config.molasses,
  });
  const bind = useGesture({
    onHover: ({ hovering }) => (hovering ? setZoom(ZOOM_IN) : setZoom(0)),
    onPointerDown: () => setZoom(ZOOM_OUT),
    onPointerUp: () => setZoom(ZOOM_IN),
  });

  const reversedStyle = {
    transform,
    scale,
  };

  return (
    <animated.img
      {...bind()}
      src={tarotImage}
      className="rotate-tarot-image"
      alt="tarot-card"
      style={reversedStyle}
    />
  );
}

export default RotateTarotCardImage;
