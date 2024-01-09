import React from "react";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import "./ShowCard.css";
import { useParams, useNavigate } from "react-router-dom";
import { useTarotStore } from "../../store";
import Affirmations from "../../components/Affirmations/Affirmations";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import BackChevronLinkContainer from "../../containers/BackChevronLinkContainer/BackChevronLinkContainer";
import {
  parseOrientation,
  parseNum,
  getTitle,
  drawInterpretation,
} from "../../utils/helpers";
import { Interpretation } from "../../store/types";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ShowCardHeader from "../../components/ShowCardHeader/ShowCardHeader";
import ShareButtonContainer from "../../containers/ShareButtonContainer/ShareButtonContainer";
import RotateTarotCardImage from "../../components/RotateTarotCardImage/RotateTarotCardImage";
import LabyrinthosLink from "../../components/LabyrinthosLink/LabyrinthosLink";

function ShowCard() {
  const navigate = useNavigate();
  const { cardNumber, cardOrientation } = useParams();
  const orientation = parseOrientation(cardOrientation);
  const number = parseNum(cardNumber, 78);
  const interpretation: Interpretation = useTarotStore(
    (state) => state.getInterpretation,
  )(number);
  const onClick = () => {
    const opposite = orientation === "reversed" ? "upright" : "reversed";
    navigate(`/cards/${number}/${opposite}`);
  };
  const title = getTitle(interpretation.name, orientation);

  return (
    <>
      <ShowCardHeader
        orientation={orientation}
        number={number}
        interpretation={interpretation}
      />
      <ScrollToTop />
      <TopNavigation>
        <BackChevronLinkContainer navigateTo="/cards" />
        <ShareButtonContainer
          show
          interpretation={drawInterpretation(interpretation, {
            number,
            orientation,
          })}
        />
      </TopNavigation>
      <div onClick={onClick} className="show-card">
        <div className="show-tarot-card">
          <RotateTarotCardImage number={number} orientation={orientation} />
        </div>
      </div>
      <div className="interpretation-container">
        <div className="interpretations">
          <Affirmations
            affirmations={interpretation.affirmations[orientation]}
          />
          <Title title={title} />
          <Keywords>{interpretation.keywords[orientation]}</Keywords>
          <Description>{interpretation.description[orientation]}</Description>
          <LabyrinthosLink
            name={interpretation.name}
            type={interpretation.type}
          >
            more
          </LabyrinthosLink>
        </div>
      </div>
    </>
  );
}

export default ShowCard;
