import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppStore, useModalsStore, useThemeStore } from "./store";
import {
  faCircleQuestion,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { MODALS } from "./constants";

const Header = () => {
  const { actions } = useAppStore();
  const { theme, toggleTheme } = useThemeStore();
  const { toggleModal } = useModalsStore();

  return (
    <div className="header">
      <div className="title">Mastermind</div>
      <div className="icons">
        <FontAwesomeIcon
          className="font-awesome-icon"
          icon={faRotateLeft}
          size="2xl"
          onClick={actions.resetGame}
        />
        <FontAwesomeIcon
          className="font-awesome-icon"
          style={{ width: "32px" }}
          onClick={toggleTheme}
          icon={theme === "light" ? faSun : faMoon}
          size="2xl"
        />
        <FontAwesomeIcon
          className="font-awesome-icon"
          icon={faCircleQuestion}
          size="2xl"
          onClick={() => toggleModal(MODALS.INFO, true)}
        />
        <FontAwesomeIcon
          className="font-awesome-icon"
          icon={faGear}
          size="2xl"
          onClick={() => toggleModal(MODALS.SETTINGS, true)}
        />
      </div>
    </div>
  );
};

export default Header;
