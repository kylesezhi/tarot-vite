import React from "react";
import "./BackChevronButtonContainer.css";
import BackChevron from "../../components/BackChevron/BackChevron";
import { useTarotStore } from "../../store";

function BackChevronButtonContainer() {
  const back = useTarotStore((state) => state.back);
  const isCardShowing = useTarotStore((state) => state.isCardShowing);
  const handleClick = () => {
    if (!isCardShowing) {
      return;
    }
    back();
  };
  const style = {
    cursor: isCardShowing ? "pointer" : "auto",
  };

  return (
    <div onClick={handleClick} style={style} className="back-chevron-button">
      <BackChevron show={isCardShowing} />
    </div>
  );
}

export default BackChevronButtonContainer;
