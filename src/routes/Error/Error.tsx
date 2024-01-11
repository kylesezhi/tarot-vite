import { useEffect } from "react";
import "./Error.css";
import Affirmation from "../../components/Affirmation/Affirmation";
import Description from "../../components/Description/Description";
import { useTarotStore } from "../../store";
import { Cards } from "../../assets/Cards/index";
import { Link } from "react-router-dom";

function Error() {
  const drawCard = useTarotStore((state) => state.drawCard);
  const interpretation = useTarotStore((state) => state.interpretation);
  const card = useTarotStore((state) => state.card);
  useEffect(() => drawCard(), [drawCard]);
  return (
    <div className="error">
      <Affirmation affirmation="404: Page Not Found" />
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={Cards[card.number]} className="tarot-error" />
      </Link>
      <Description>{interpretation.http404Message}</Description>
    </div>
  );
}

export default Error;
