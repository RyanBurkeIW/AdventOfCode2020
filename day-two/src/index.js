import { parserV1, parserV2 } from "../tools/parser";

/**
 * Part One Solution
 */

export const passwordValidatorV1 = (input) => {
  let validTotal = 0;

  const formattedInput = parserV1(input);

  formattedInput.forEach(({ min, max, character, password }) => {
    const matchingCharacters = password
      .split("")
      .filter((passwordCharacter) => passwordCharacter === character).length;

    if (matchingCharacters >= min && matchingCharacters <= max) {
      validTotal += 1;
    }
  });

  return validTotal;
};

/**
 * Part Two Solution
 */

export const passwordValidatorV2 = (input) => {
  let validTotal = 0;

  const formattedInput = parserV2(input);

  formattedInput.forEach(({ firstIndex, secondIndex, character, password }) => {
    if (
      (password[firstIndex] === character &&
        password[secondIndex] !== character) ||
      (password[firstIndex] !== character &&
        password[secondIndex] === character)
    ) {
      validTotal += 1;
    }
  });

  return validTotal;
};
