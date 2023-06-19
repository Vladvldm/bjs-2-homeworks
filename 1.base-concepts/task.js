"use strict";

/* --- Задача №1 --- */

function solveEquation(a, b, c) {
  let arr = [];
  // Вычисляем дискримименант
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

/* --- Задача №2 --- */

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Контроль ошибок введенных данных.
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }

  let per = percent / 100 / 12; // процентная ставка
  let sum = amount - contribution; // тело кредита
  let pay = sum * (per + per / (Math.pow(1 + per, countMonths) - 1));
  let totalAmount = +(pay * countMonths).toFixed(2); //сумма кредита

  return totalAmount;
}

/*
percent - процентная ставка,
contribution - вклад,
amount - сумма вклада,
countMonths - количество Месяцев
*/
