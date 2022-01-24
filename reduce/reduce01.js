const arr = [4, 2, 1, 2];

function sumReducer(runningTotal, value) {
  return runningTotal + value
}

const initialValue = 0;

// Like using sum on a range of numbers in a spreadsheet
const sumOfArr = arr.reduce(sumReducer, initialValue);

console.log(sumOfArr);

// Too distracting...?
console.log(`(${arr.join(' + ')}) = ${sumOfArr}`)
