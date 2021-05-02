// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

let phone = {
  iphone: 'gold',
  sumsung: 'black',
  lg: 'grey',
};

// iphone - true
let brand = 'smart'; 

function definition(str, obj) {
  for (let key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

console.log(definition(brand, phone));