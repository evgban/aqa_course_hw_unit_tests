/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
  let minAge = 18;
  let maxAge = 60;
  let age;
  age = "22";
  let typeOfAgeIsNumber = Number(age);
  if (typeof typeOfAgeIsNumber != "number") {
    console.log("Incorrect data type");
  }
  else if (typeOfAgeIsNumber < minAge) {
    console.log("You don't have access cause your age is " + age + "." + " It's less then " + minAge + ".");
  }
  else if (minAge <= typeOfAgeIsNumber, typeOfAgeIsNumber < maxAge) {
    console.log("Welcome !");
  }
  else if (typeOfAgeIsNumber > maxAge) {
    console.log("Keep calm and look Culture channel");
  }
  else {
    console.log("Technical work");
  }