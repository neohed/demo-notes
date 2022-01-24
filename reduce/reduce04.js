const arr = [4, 2, 1, 2];

function expandArrayReducer(acc, value) {
  acc.push(value);
  acc.push(-value);
  return acc
}

const initialValue = [];

const expandedArr = arr.reduce(expandArrayReducer, initialValue);

console.log(expandedArr);
