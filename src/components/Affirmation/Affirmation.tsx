import React from "react";
import "./Affirmation.css";

interface AffirmationProps {
  affirmation: string;
}

function Affirmation({ affirmation }: AffirmationProps) {
  return <div className="affirmation">{affirmation}</div>;
}

export default Affirmation;
