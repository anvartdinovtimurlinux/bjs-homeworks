'use strict';

function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  for (let arg of arguments) {
    console.log(arguments);
    console.log(arg);
    if (typeof Number(arg) !== 'number') {
      
      return `Параметр содержит неправильное значение ${arg}`;
    }
  }

  // код для задачи №1 писать здесь
  //return totalAmount;
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  //return greeting;
}