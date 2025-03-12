/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels1 = 'aeiou';
  function countQtyOfVowels(word) {
    let vowelsNumber1 = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels1.includes(word[i])) {
          vowelsNumber1++;
      }
  }
  return vowelsNumber1;
}
return wordsArr.sort((a, b) => countQtyOfVowels(a) - countQtyOfVowels(b));
}
console.log(sortedByVowels(words));

export { sortedByVowels };
