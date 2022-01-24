const arr = [4, 2, 1, 2];

function callback(acc, value, index, originalArray) {
  return acc
}

const initialValue = 0;

const res = arr.reduce(callback, initialValue);

console.log(res);
