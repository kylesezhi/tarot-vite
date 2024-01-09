import React, { useState } from "react";
import { useGesture } from "react-use-gesture";
import { Link } from "react-router-dom";
import "./StaticTarotCardContainer.css";
import CardName from "../../components/CardName/CardName";
import { Interpretation } from "../../store/types";
import { Cards } from "../../assets/Cards/index";
import { animated, config, useSpring } from "@react-spring/web";

interface StaticTarotCardContainerProps {
  card: Interpretation;
  number: number;
}

function StaticTarotCardContainer({
  card,
  number,
}: StaticTarotCardContainerProps) {
  const ZOOM_IN = 0.1;
  const ZOOM_OUT = -0.1;

  // Fade in card on load
  const [load, setLoad] = useState<boolean>(false);
  const [zoom, setZoom] = useState(0);
  const onLoad = () => setLoad(true);
  const { opacity, scale } = useSpring({
    opacity: load ? 1 : 0,
    scale: 1 + zoom,
    config: config.molasses,
  });
  const bind = useGesture({
    onHover: ({ hovering }) => (hovering ? setZoom(ZOOM_IN) : setZoom(0)),
    onPointerDown: () => setZoom(ZOOM_OUT),
    onPointerUp: () => setZoom(ZOOM_IN),
  });

  const style = { opacity, scale };

  return (
    <Link to={`/cards/${number}/upright`} style={{ textDecoration: "none" }}>
      <animated.div
        className="static-tarot-card-container"
        style={{ opacity }}
        {...bind()}
      >
        <div className="static-tarot-image-container">
          <animated.img
            src={Cards[number]}
            className="tarot-image"
            alt="tarot-card"
            onLoad={onLoad}
            style={style}
          />
        </div>
        <CardName title={card.name} />
      </animated.div>
    </Link>
  );
}

export default StaticTarotCardContainer;
