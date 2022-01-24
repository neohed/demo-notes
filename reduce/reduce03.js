const arr = [4, 1, 2, 1];

function buildDictionaryReducer(dictionary, value) {
  if (dictionary[value]) {
    dictionary[value]++
  } else {
    dictionary[value] = 1
  }

  return dictionary
}

const initialValue = {};

// Build a collection of numbers
const dictionaryResult = arr.reduce(buildDictionaryReducer, initialValue)

console.log(dictionaryResult)
