import Row from "./Row";
import { COLORS } from "../../constants";
import { useComponentListCreator } from "../../hooks/useComponentListCreator";
import { useAppStore } from "../../store";

const Rows = () => {
  const { code, gameKey, settings } = useAppStore();

  console.log(code.map((n) => `${COLORS[n]} - ${n}`));

  return (
    <div key={gameKey} className="game">
      {useComponentListCreator(Row, settings.guesses)}
    </div>
  );
};

export default Rows;
