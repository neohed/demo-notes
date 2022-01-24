const arr = [4, 2, 1, 2];

function minMaxReducer(minMax, value) {
  return {
    min: Math.min(minMax.min, value),
    max: Math.max(minMax.max, value)
  }
}

const initialValue = {
  min: Number.MAX_VALUE,
  max: Number.MIN_VALUE
};

const minMaxResult = arr.reduce(minMaxReducer, initialValue);

console.log(minMaxResult)
