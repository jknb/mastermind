import "./App.css";
import { useAppStore, useThemeStore } from "../../store";
import Modals from "../Modals";
import Header from "../Header";
import Rows from "../Rows";

function App() {
  const { theme } = useThemeStore();
  const selectedGameModeId = useAppStore((state) => state.settings.id);
  return (
    <div>
      <div className={`app-container ${theme}-theme`}>
        <Header />
        <hr className="separator" />
        <div className="selected-mode-display">Mode: {selectedGameModeId}</div>
        <Rows />
        <Modals />
      </div>
    </div>
  );
}

export default App;
