// import { useState } from "react";
// import CodePeg from "./CodePeg";
// import { useComponentListCreator } from "./hooks/useComponentListCreator";
// import { useGameStatusStore } from "./store";

// const CodePegs = ({ isClickable}) => {

//   const [codePegsColors, setCodePegsColors] = useState(
//     new Array(4).fill(null).map(() => "white")
//   );
//   const codePegs = useComponentListCreator(CodePeg, 4, (index) => ({
//     size: "36px",
//     setCodePegs: setCodePegsColors,
//     backgroundColor: codePegsColors[index],
//     isClickable: isClickable
//   }));
// };

// export default CodePegs;
