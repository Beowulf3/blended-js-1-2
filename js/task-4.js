// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

function timeIs() {
  alert("Task 4: перетворення хвилин в години");
  const minutes = prompt("Введіть кількіть хвилин");
  const pattern = /[0-9]/g;
  if (pattern.test.minutes || Number(minutes) < 0) {
    alert("Невалідний формат. Хвилини мають бути додатнім чилом!");
  } else {
    let hour = Math.floor(Number(minutes) / 60);
    let minute = Number(minutes) % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  }
}

console.log(timeIs());
