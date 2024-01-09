import "./Error.css";
import Affirmation from "../../components/Affirmation/Affirmation";
import Description from "../../components/Description/Description";
import { getRandom } from "../../utils/helpers";

function Error() {
  const errorMessages = [
    "The Fool has taken a detour, leading you to an unexpected 404. Seek guidance from The High Priestess to find your way back.",
    "The Fool's journey is full of surprises, and this one has led you to a 404. Embrace the unexpected and start a new adventure.",
    "The Wheel of Fortune has turned, revealing a hidden path. Trust in the universe's plan and seek a new route from this 404.",
    "Fortune has shifted, leading you to a 404. Embrace change and explore new possibilities.",
    "The Moon's mysteries sometimes lead to unexpected places, like this 404. Embrace the unknown and trust your intuition to guide you.",
    "The Hanged Man offers a new perspective to this 404: pause, reflect, and consider a different approach.",
    "Sometimes a pause is necessary to find the right path when confronted by a 404. Take a moment to reflect, and then continue your journey.",
    "The Tower has crumbled to a 404, revealing a new path beyond the ruins. Embrace change and create something new.",
    "Unexpected disruptions can lead to unexpected discoveries. Embrace the shake-up and explore the possibilities beyond this 404.",
  ];
  const errorMessage = getRandom(errorMessages);
  return (
    <div className="error">
      <Affirmation affirmation="404: Page Not Found" />
      <Description>{errorMessage}</Description>
    </div>
  );
}

export default Error;
