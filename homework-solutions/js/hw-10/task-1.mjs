/*
 1. Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord),
    который будет возвращать строку вида: 
    ${greetingsWord}, my name is ${name}, I'm ${age} and my salary is ${salary}. 
    Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

let qa = {
  name: "Ann",
  age: 20,
  salary: 15000,
  getInfo: function(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
}
};

console.log(qa.getInfo("Hi"));

/*
 2. Changing the context
  - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
 */

let anotherQa = {
  name: "Sasha",
  age: 33,
  salary: 12000,
}

const callByBindGetInfo = qa.getInfo.bind(anotherQa);
console.log(callByBindGetInfo("Hi"));
console.log(qa.getInfo.call(anotherQa, "Hello"));
console.log(qa.getInfo.apply(anotherQa, ["Hey"]));


// Используйте bind с greetingWord "Hello"
let bindResult = qa.getInfo.bind(anotherQa);
bindResult = bindResult("Hello");

// Используйте call с greetingWord "Hi"
let callResult = qa.getInfo.call(anotherQa, "Hi");

// Используйте apply с greetingWord "Hey"
let applyResult = qa.getInfo.apply(anotherQa, ["Hey"]);

/*
 3. Closures
  - Создайте функцию createCounter(),
  - Создайте в функции createCounter переменную count, которая будет равна 0
  - Верните из функции createCounter новую функцию
  - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
  - После увеличение каунтера выводите в консоль Function was called ${count} times
  - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
  - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
*/

function createCounter() {
  let count = 0;
  return function() {
    count++; 
    console.log(`Function was called ${count} times`);
    return count;
  };
}

const functionCallCounter = createCounter();

export { qa, bindResult, callResult, applyResult, functionCallCounter, anotherQa };
