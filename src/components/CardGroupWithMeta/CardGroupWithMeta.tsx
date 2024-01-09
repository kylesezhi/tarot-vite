import "./CardGroupWithMeta.css";
import StaticTarotCardContainer from "../../containers/StaticTarotCardContainer/StaticTarotCardContainer";
import Title from "../Title/Title";
import CardGroup from "../CardGroup/CardGroup";
import { Interpretation, Type } from "../../store/types";

interface CardGroupWithMetaProps {
  interpretations: Array<Interpretation>;
  type: Type;
  title: string;
}

function CardGroupWithMeta({
  interpretations,
  type,
  title,
}: CardGroupWithMetaProps) {
  return (
    <div className="card-group-with-meta" id={type}>
      <Title title={title} />
      <CardGroup>
        {interpretations
          .filter((card) => card.type === type)
          .map((card) => (
            <StaticTarotCardContainer
              key={`${card.number}${card.name}`}
              card={card}
              number={card.number}
            />
          ))}
      </CardGroup>
    </div>
  );
}

export default CardGroupWithMeta;
