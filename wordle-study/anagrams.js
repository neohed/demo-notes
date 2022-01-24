const {nextPrime} = require('../lib/primes');
const {words} = require('./word_data');

const primeGenerator = nextPrime();
const alphaPrimes = new Map();

for (let i = 97; i < 123; i++) {
    alphaPrimes.set(String.fromCharCode(i), primeGenerator.next().value)
}

function calculateWordValue(word) {
    let primeFactorization = 1;

    for (let i = 0; i < word.length; i++) {
        primeFactorization *= alphaPrimes.get(word[i])
    }

    return primeFactorization
}

const wordsPrimeFactorizations = new Map();

words.forEach(word => {
    const pf = calculateWordValue(word);

    const existing = wordsPrimeFactorizations.get(pf);
    if (existing === undefined) {
        wordsPrimeFactorizations.set(pf, [word])
    } else {
        wordsPrimeFactorizations.set(pf, [word, ...existing])
    }
})

function findAnagrams(text) {
    const pf = calculateWordValue(text);
    const res = [];

    wordsPrimeFactorizations.forEach((words_1, key_1) => {
        wordsPrimeFactorizations.forEach((words_2, key_2) => {
            if (key_1 * key_2 === pf) {
                words_1.forEach(word_1 => {
                    words_2.forEach(word_2 => {
                        res.push([
                            word_1,
                            word_2
                        ])
                    })
                })
            }
        })
    })

    return res
}

module.exports = {
    findAnagrams
}
