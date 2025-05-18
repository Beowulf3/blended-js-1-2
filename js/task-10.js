// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  alert("Task 10: перевірка на ділення без залишку на 3 і 5");
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}, fizzbuzz`);
      continue;
    } else if (i % 3 === 0) {
      console.log(`${i}, fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}, buzz`);
    }
  }
}

console.log(fizzBuzz(20));
