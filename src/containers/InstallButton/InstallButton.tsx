import { useEffect, useState } from "react";
import { useAddToHomescreenPrompt } from "../../hooks/useAddToHomescreenPrompt";
import "./InstallButton.css";

function InstallButton() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (prompt) {
      setVisible(true);
    }
  }, [prompt]);
  const onClick = async () => {
    if (prompt) {
      promptToInstall();
    }
  };
  return (
    <div className={`install-button${visible ? "" : " hide"}`}>
      <button onClick={onClick}>Install</button>
    </div>
  );
}

export default InstallButton;
