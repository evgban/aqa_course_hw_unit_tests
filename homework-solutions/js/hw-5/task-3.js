/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowelsNumber = 0;
let consonantsNumber = 0;
let vowels = 'aeiouy'
 for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelsNumber++
    }
    else {
        consonantsNumber++
    }
 }
vowelsAndConsonantsResult += `${word} contains ${vowelsNumber} vowels and ${consonantsNumber} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
