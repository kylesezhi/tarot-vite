import React from "react";
import "./TarotCardContainer.css";
import { useTarotStore } from "../../store";
import TarotCard from "../../components/TarotCard/TarotCard";

function TarotCardContainer() {
  const drawCard = useTarotStore((state) => state.drawCard);
  const card = useTarotStore((state) => state.card);
  const isCardShowing = useTarotStore((state) => state.isCardShowing);
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const showInterpretation = useTarotStore((state) => state.showInterpretation);

  const onClick = () => {
    if (!isCardShowing) {
      drawCard();
    } else if (!isInterpretationShowing) {
      showInterpretation();
    }
  };

  return (
    <div
      data-testid="tarot-card-container"
      onClick={onClick}
      className="tarot-card-container"
    >
      <TarotCard
        number={card.number}
        orientation={card.orientation}
        isCardShowing={isCardShowing}
        isClickable={!(isInterpretationShowing && isCardShowing)}
      />
    </div>
  );
}

export default TarotCardContainer;
