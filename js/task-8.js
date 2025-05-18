// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  alert("Task 8: Вивід у консоль меншого числа");
  if (typeof a !== "number" || typeof b !== "number") {
    return `Not a number!`;
  } else return Math.min(a, b);
}
console.log(min(1, 3));
