/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...args) {
  const mergedArray = [].concat(...args);
  return mergedArray;
}
console.log(mergeArrays([1,2], [3,4], [5,6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
      const arrayOfWords = sentence.split(' ').filter(word => word !== '');
      let newArray = [];
      for (let i = 0; i < arrayOfWords.length; i++) {
      if (i === 0) {
        newArray.push(arrayOfWords[i].toLowerCase());
       } else {
        newArray.push(arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1).toLowerCase());
        }
      }
      const modifiedSentence = newArray.join('_');
      return modifiedSentence;
    }
    console.log(devideBy("I am super engineer"));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
    function fibonacci(n) {
      let numbersOfFibonacci = [0, 1];
      if (n === 0 || n === 1) {
        return n;
      } else {
        for (let i = 2; i <= n; i++) {
          numbersOfFibonacci[i] = numbersOfFibonacci[i-1] + numbersOfFibonacci[i-2];
        }
        return numbersOfFibonacci[n];
    }
    }
    console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
