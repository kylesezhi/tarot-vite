import "./TarotCardImage.css";
import { Orientation } from "../../store/types";
import { Cards } from "../../assets/Cards/index";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function TarotCardImage({
  number = 78,
  orientation = "upright",
}: TarotImageProps) {
  const style = {
    transform: `rotate(${orientation === "upright" ? 0 : 180}deg)`,
  };

  return (
    <img
      src={Cards[number]}
      className="tarot-image"
      style={style}
      alt="tarot-card"
    />
  );
}

export default TarotCardImage;
