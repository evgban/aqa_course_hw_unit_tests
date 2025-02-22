/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull = [];
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let lowerCaseCompetitorPizzas = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  lowerCaseCompetitorPizzas.push(competitorPizzas[i].toLowerCase());
}
for (let j of myPizzasT1) {
  if (lowerCaseCompetitorPizzas.includes(j.toLowerCase())) {
  resultNull = null;
} else {
  resultUnique.push(j);
}
}
for (let k of myPizzasT2) {
  if (lowerCaseCompetitorPizzas.includes(k.toLowerCase())) {
  resultNull = null;
} else {
  resultUnique.push(k);
}
}
console.log(resultNull);
console.log(resultUnique);

export { resultNull, resultUnique };
