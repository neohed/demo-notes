const {words} = require('./word_data');
const {findAnagrams} = require('./anagrams');
const letterFrequencies = new Map();

// Create Map of characters A to Z
for (let i = 97; i < 123; i++) {
    letterFrequencies.set(String.fromCharCode(i), 0)
}

// Calculate letter frequencies
words.reduce((letterFrequency, word) => {
    for (let j = 0; j < word.length; j++) {
        const frequency = letterFrequency.get(word[j]);
        letterFrequency.set(word[j], frequency + 1)
    }

    return letterFrequency
}, letterFrequencies)

// Get array from Map
const keyIterator = letterFrequencies.keys();
const frequencies = [];
let word;
while (word = keyIterator.next().value) {
    frequencies.push([
        word,
        letterFrequencies.get(word)
    ])
}

// Sort by frequency descending
frequencies.sort(
    ([,first], [,second]) => second - first
)

// Get top letters
const wordNumber = 2;
const topLetters = frequencies
    .slice(0, wordNumber * 5)
    .map(([letter]) => letter)
    .join('');

console.log(topLetters)

console.log(findAnagrams(topLetters))
