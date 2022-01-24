const arr = [4, 2, 1, 2];

function callback(acc, value, index, initialArray) {
  console.log({acc, value, index});
  console.log(initialArray);

  return acc + value
}

const initialValue = 34;

const result = arr.reduce(callback, initialValue);

console.log('Final result: ' + result);
