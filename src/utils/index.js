import { COLORS } from "../constants";

// export const createCode = () => [1, 1, 1, 1];
export const createCode = (withDuplicates) =>
  Array.from({ length: 4 }).reduce((code) => {
    let newDigit;
    do {
      newDigit = Math.floor(Math.random() * 9);
    } while (!withDuplicates && code.includes(newDigit));

    return code.concat(newDigit);
  }, []);

export const transformColorsToNumbers = (colors) =>
  colors.map((colorText) => COLORS.indexOf(colorText));

export const calculateRowResult = (guess, secretCode) => {
  const CODE_LENGTH = secretCode.length;
  const result = { greenPegs: 0, redPegs: 0 };

  for (let i = 0; i < CODE_LENGTH; i++) {
    if (guess[i] === secretCode[i]) {
      result.greenPegs++;
    }
  }

  const answers = new Array(COLORS.length).fill(0);
  const guesses = new Array(COLORS.length).fill(0);

  let GreensPlusReds = 0;
  COLORS.forEach((_, colorIndex) => {
    secretCode.forEach((code) => {
      if (colorIndex === code) {
        answers[colorIndex]++;
      }
    });
    guess.forEach((code) => {
      if (colorIndex === code) {
        guesses[colorIndex]++;
      }
    });

    GreensPlusReds += Math.min(answers[colorIndex], guesses[colorIndex]);
  });
  result.redPegs = GreensPlusReds - result.greenPegs;

  return result;
};
