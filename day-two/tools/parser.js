export const parserV1 = (input) => {
  let formattedInput = [];
  input.forEach((policyString) => {
    const policyArray = policyString.split(" ");
    const policyObject = {
      min: policyArray[0].split("-")[0],
      max: policyArray[0].split("-")[1],
      character: policyArray[1][0],
      password: policyArray[2],
    };
    formattedInput.push(policyObject);
  });
  return formattedInput;
};

export const parserV2 = (input) => {
    let formattedInput = [];
    input.forEach((policyString) => {
      const policyArray = policyString.split(" ");
      const policyObject = {
        firstIndex: parseInt(policyArray[0].split("-")[0]) - 1,
        secondIndex: parseInt(policyArray[0].split("-")[1]) - 1,
        character: policyArray[1][0],
        password: policyArray[2],
      };
      formattedInput.push(policyObject);
    });
    return formattedInput;
  };