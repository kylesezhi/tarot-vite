import { useEffect, useState } from "react";
import { useAddToHomescreenPrompt } from "../../hooks/useAddToHomescreenPrompt";
import "./InstallButton.css";
import installIcon from "./assets/install-icon.svg";
import { useTarotStore } from "../../store";

function InstallButton() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [visible, setVisible] = useState<boolean>(false);
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const isCardShowing = useTarotStore((state) => state.isCardShowing);
  const show = visible && !isInterpretationShowing && !isCardShowing;

  useEffect(() => {
    if (prompt) {
      setVisible(true);
    }
  }, [prompt]);

  const onClick = async () => {
    if (prompt && typeof promptToInstall === "function") {
      await promptToInstall();
    }
  };
  return (
    <div className={`install-button-container${show ? "" : " hide"}`}>
      <button onClick={onClick} className="install-button">
        <img src={installIcon} />
        Install
      </button>
    </div>
  );
}

export default InstallButton;
