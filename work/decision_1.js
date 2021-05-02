// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

let phone = {
  iphone: 'gold',
  sumsung: 'black',
  lg: 'grey'
}

function checkPhone() {
  for (let key in phone) {
    if (phone.hasOwnProperty(key)) {
      console.log(key,phone[key])
    }
  }
}

checkPhone(phone)