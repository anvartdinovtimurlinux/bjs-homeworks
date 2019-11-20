'use strict';

console.log('Домашнее задание к занятию 3.1 «Прототип массива, функции высшего порядка»');
console.log('------------------Задача №1. Ускорение долгих вычислений------------------');

const compareArrays = (arr1, arr2) => arr1.length === arr2.length &&
  arr1.every((element, i) => element === arr2[i]);

const memoize = (fn, limit) => {
  const results = [];

  return function () {
    const fArgs = Array.from(arguments);

    let ans = results.find(result => compareArrays(result.args, fArgs));
    if (ans) {
      return `Результат выполнения функции берется из памяти: ${ans.result}`;
    }

    results.push({
      args: fArgs,
      result: fn(...fArgs),
    });

    if (results.length > limit) {
      results.shift();
    }

    return `Функция вычисляет результат: ${results[results.length - 1].result}`;
  }
};


const sum = (a, b, c) => a + b + c;
const mSum = memoize(sum, 3);
console.log('Наша функция складывает три числа и хранит 3 последних результата в памяти');

console.log('\nСложим 3, 4, 5');
console.log(mSum(3, 4, 5));

console.log('\nСложим 3, 4, 7');
console.log(mSum(3, 4, 7));

console.log('\nСложим 3, 4, 5');
console.log(mSum(3, 4, 5));

console.log('\nСложим 3, 4, 9');
console.log(mSum(3, 4, 9));

console.log('\nСложим 3, 4, 5');
console.log(mSum(3, 4, 5));

console.log('\nСложим 3, 4, 11');
console.log(mSum(3, 4, 11));

console.log('\nСложим 3, 4, 5');
console.log(mSum(3, 4, 5));
