import React from "react";
import "./LabyrinthosLink.css";
import { getLabyrinthosUrl } from "../../utils/helpers";

interface DescriptionProps {
  children: string;
  name: string;
  type: string;
}

function LabyrinthosLink({ children, name, type }: DescriptionProps) {
  const link = getLabyrinthosUrl(name, type);
  if (!link) {
    return <div id="labyrinthos-link"></div>;
  }
  return (
    <div id="labyrinthos-link">
      <a href={link} target="blank" className="labyrinthos-link">
        {children}
      </a>
    </div>
  );
}

export default LabyrinthosLink;
