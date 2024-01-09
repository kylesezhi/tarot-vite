import React from "react";
import "./AnchorPill.css";

interface AnchorPillProps {
  link: string;
  title: string;
}

function AnchorPill({ link, title }: AnchorPillProps) {
  const onClick = () => {
    const targetElement = document.getElementById(link);
    if (targetElement === null) {
      return;
    }
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <button onClick={onClick} className="anchor-pill">
      {title}
    </button>
  );
}

export default AnchorPill;
