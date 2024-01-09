import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import "./InterpretationContainer.css";
import { useTarotStore } from "../../store";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import Affirmation from "../../components/Affirmation/Affirmation";
import LabyrinthosLink from "../../components/LabyrinthosLink/LabyrinthosLink";

function InterpretationContainer() {
  const interpretation = useTarotStore((state) => state.interpretation);
  const name = useTarotStore((state) => state.getInterpretation)(
    interpretation.number,
  ).name;
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const { opacity, paddingTop } = useSpring({
    opacity: isInterpretationShowing ? 1 : 0,
    paddingTop: isInterpretationShowing ? "0" : "50px",
    config: config.molasses,
  });

  const style = {
    opacity,
    paddingTop,
  };

  return (
    <animated.div
      data-testid="interpretation-container"
      className="interpretation-container"
      style={style}
    >
      <div className="interpretations">
        <Affirmation affirmation={interpretation.affirmation} />
        <Title title={interpretation.name} />
        <Keywords>{interpretation.keywords}</Keywords>
        <Description>{interpretation.description}</Description>
        <LabyrinthosLink name={name} type={interpretation.type}>
          more
        </LabyrinthosLink>
      </div>
    </animated.div>
  );
}

export default InterpretationContainer;
