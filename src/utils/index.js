import { COLORS } from "../constants";

// export const createCode = () => [1, 1, 1, 1];
export const createCode = (numberOfPegs, withDuplicates) =>
  Array.from({ length: numberOfPegs }).reduce((code) => {
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
  const result = { exactMatchPegs: 0, colorMatchPegs: 0 };

  for (let i = 0; i < CODE_LENGTH; i++) {
    if (guess[i] === secretCode[i]) {
      result.exactMatchPegs++;
    }
  }

  const answers = new Array(COLORS.length).fill(0);
  const guesses = new Array(COLORS.length).fill(0);

  let summedGuesses = 0;
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

    summedGuesses += Math.min(answers[colorIndex], guesses[colorIndex]);
  });
  result.colorMatchPegs = summedGuesses - result.exactMatchPegs;

  return result;
};

export const getAverage = (arr) =>
  arr.reduce((avg, cur) => avg + cur) / arr.length;
