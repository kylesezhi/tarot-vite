import "./AllCards.css";
import { useTarotStore } from "../../store";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BackChevronLinkContainer from "../../containers/BackChevronLinkContainer/BackChevronLinkContainer";
import CardGroupWithMeta from "../../components/CardGroupWithMeta/CardGroupWithMeta";
import AnchorPill from "../../components/AnchorPill/AnchorPill";
import AnchorPills from "../../components/AnchorPills/AnchorPills";

function AllCards() {
  const interpretations = useTarotStore((state) => state.interpretations);
  return (
    <div className="all-cards">
      <TopNavigation>
        <BackChevronLinkContainer navigateTo="/" />
      </TopNavigation>
      <AnchorPills>
        <AnchorPill link="major" title="Major Arcana" />
        <AnchorPill link="cups" title="Cups" />
        <AnchorPill link="swords" title="Swords" />
        <AnchorPill link="wands" title="Wands" />
        <AnchorPill link="pentacles" title="Pentacles" />
      </AnchorPills>
      <CardGroupWithMeta
        interpretations={interpretations}
        type="major"
        title="Major Arcana"
      />
      <CardGroupWithMeta
        interpretations={interpretations}
        type="cups"
        title="Cups"
      />
      <CardGroupWithMeta
        interpretations={interpretations}
        type="swords"
        title="Swords"
      />
      <CardGroupWithMeta
        interpretations={interpretations}
        type="wands"
        title="Wands"
      />
      <CardGroupWithMeta
        interpretations={interpretations}
        type="pentacles"
        title="Pentacles"
      />
    </div>
  );
}

export default AllCards;
