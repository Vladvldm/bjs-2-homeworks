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
  return arr.push(root);
} else {
  let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return arr.push(root1, root2);
}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {}

/*
percent - процентная ставка,
contribution - вклад,
amount - сумма вклада,
countMonths - количество Месяцев
*/
