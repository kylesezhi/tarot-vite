import React, { useState, useEffect } from "react";
import TarotCardImage from "../TarotCardImage/TarotCardImage";
import "./TarotCard.css";
import { useSpring, animated, config } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Version from "../Version/Version";
import { Orientation } from "../../store/types";

interface TarotProps {
  number: number;
  orientation: Orientation;
  isCardShowing: boolean;
  isClickable: boolean;
}

function TarotCard({
  number = 78,
  orientation = "upright",
  isCardShowing,
  isClickable,
}: TarotProps) {
  const ZOOM_IN = 0.05;
  const ZOOM_OUT = -0.1;

  // Fade in card on load
  const [load, setLoad] = useState(false);
  const [zoom, setZoom] = useState(0);
  useEffect(() => setLoad(true), []);

  const { transform, opacity, height, scale } = useSpring({
    opacity: !load ? 0 : isCardShowing ? 0 : 1,
    transform: `perspective(900px) rotateY(${!isCardShowing ? 180 : 0}deg)`,
    height: load ? "60vh" : "20vh",
    scale: 1 + zoom,
    config: config.molasses,
  });
  const bind = useGesture({
    onHover: ({ hovering }) =>
      hovering && isClickable ? setZoom(ZOOM_IN) : setZoom(0),
    onPointerDown: () => isClickable && setZoom(ZOOM_OUT),
    onPointerUp: () => isClickable && setZoom(ZOOM_IN),
  });
  const frontStyle = {
    opacity: opacity.to((o) => (!isCardShowing ? 0 : 1 - o)),
    transform,
    scale,
  };
  const backStyle = {
    opacity,
    transform,
    height,
    scale,
  };

  return (
    <div className="tarot-sides-container" {...bind()}>
      <animated.div
        data-testid="front-card"
        id="front-card"
        className="tarot-card"
        style={frontStyle}
      >
        <TarotCardImage number={number} orientation={orientation} />
      </animated.div>
      <animated.div
        id="back-card"
        data-testid="back-card"
        className="tarot-card"
        style={backStyle}
      >
        <TarotCardImage number={78} />
        <Version />
      </animated.div>
    </div>
  );
}

export default TarotCard;
