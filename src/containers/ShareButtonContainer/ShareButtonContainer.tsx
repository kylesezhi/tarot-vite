import React from "react";
import "./ShareButtonContainer.css";
import ShareButton from "../../components/ShareButton/ShareButton";
import { getCardUrl } from "../../utils/helpers";
import { DrawnInterpretation } from "../../store/types";
interface ShareButtonContainerProps {
  interpretation: DrawnInterpretation;
  show: boolean;
}
function ShareButtonContainer({
  interpretation,
  show,
}: ShareButtonContainerProps) {
  const data = {
    title: interpretation.name,
    text: interpretation.affirmation,
    url: getCardUrl(interpretation.number, interpretation.orientation),
  };
  const canShare = show && navigator.canShare && navigator.canShare(data);

  const onClick = async () => {
    if (!canShare) {
      return;
    }
    try {
      await navigator.share(data);
    } catch (e) {
      console.error(e);
    }
  };

  const style = {
    cursor: canShare ? "pointer" : "auto",
  };

  return (
    <div onClick={onClick} className="share-button-container" style={style}>
      <ShareButton show={canShare} />
    </div>
  );
}

export default ShareButtonContainer;
