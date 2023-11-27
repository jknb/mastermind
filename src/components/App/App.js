import "./App.css";
import { useThemeStore } from "../../store";
import Modals from "../Modals";
import Header from "../Header";
import Rows from "../Rows";

function App() {
  const { theme } = useThemeStore();
  return (
    <div>
      <div className={`app-container ${theme}-theme`}>
        <Header />
        <hr className="separator" />
        <Rows />
        <Modals />
      </div>
    </div>
  );
}

export default App;
