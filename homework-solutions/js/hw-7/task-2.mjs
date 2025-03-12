/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word == 'string') {
word = word.toLowerCase();
  return word === word.split('').reverse().join('');
  } else {
  return false;
  }

}
console.log(isPalindrom('Алла'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return [];
  } else {
  let arrayOfWords = sentence.split(' ');
  let maxLength = 0;
  for (let word of arrayOfWords) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  let theLongestWord = arrayOfWords.filter(word => word.length === maxLength);
  return theLongestWord;
}
}

console.log(findLongestWords('Переменной было присвоено значение'));

export { isPalindrom, findLongestWords };
