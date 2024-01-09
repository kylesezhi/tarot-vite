import React from "react";
import "./ShareButton.css";
import icon from "./assets/share.svg";

interface ShareButtonProps {
  show: boolean;
}

function ShareButton({ show }: ShareButtonProps) {
  const styles = { opacity: show ? 0.3 : 0 };
  return (
    <img src={icon} alt="share-icon" className="share-image" style={styles} />
  );
}

export default ShareButton;
