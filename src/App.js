import "./App.css";
import Row from "./Row";
import { COLORS } from "./constants";
import { useComponentListCreator } from "./hooks/useComponentListCreator";
import { useAppStore, useThemeStore } from "./store";
import Header from "./Header";
import Modals from "./Modals";

function App() {
  const { theme } = useThemeStore();
  const { code, gameKey, settings } = useAppStore();

  const numberOfRows = settings.numberOfGuesses;
  const rows = useComponentListCreator(Row, numberOfRows);

  console.log(code.map((n) => `${COLORS[n]} - ${n}`));

  return (
    <div>
      <div className={`app-container ${theme}-theme`}>
        <Header />
        <hr className="separator" />
        <div key={gameKey} className="game">
          {rows}
        </div>
        <Modals />
      </div>
    </div>
  );
}

export default App;
