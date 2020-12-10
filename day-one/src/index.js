// Instantiate empty array at top scope for numbers to be multiplied.
let correctNumbers = [];

const expenseResolver = (numberTotal, input) => {
    // Clear the array of numbers to be multiplied at start of each function run to avoid crossovers in test.
    correctNumbers = [];
    numberTotal < 3 ? findPair(input) : findTrio(input);
    return multiplyNumbers(correctNumbers);
}


/**
 * I'd like to come back and replace these functions with something more dynamic.
 * Got to the advent a bit late starting a new role.
 * TODO: return to this once caught up.
 */

const findPair = input => {
    for (let first = 0; first < input.length; first += 1) {
        for (let second = first; second < input.length; second += 1) {
            if(input[first] + input[second] === 2020) {
                correctNumbers.push(input[first]);
                correctNumbers.push(input[second]);
            }
        }
    }
}

const findTrio = input => {
    for (let first = 0; first < input.length; first += 1) {
        for (let second = first; second < input.length; second += 1) {
            for (let third = second; third < input.length; third += 1) {
                if(input[first] + input[second] + input[third] === 2020) {
                    correctNumbers.push(input[first]);
                    correctNumbers.push(input[second]);
                    correctNumbers.push(input[third]);
                }
            }
        }
    }
}

const multiplyNumbers = correctNumbers => {
    return correctNumbers.reduce((total, currentValue) => total * currentValue)
}

export default expenseResolver;