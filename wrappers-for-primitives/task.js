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
  const args = {
    percent,
    contribution,
    amount
  };
  for (const key in args) {
    if (isNaN(Number(args[key]))) {
      const result = `Параметр ${key} содержит неправильное значение ${args[key]}`;
      console.log(result);
      return result;
    }
  }

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  date = new Date(date);
  const currentDate = new Date();
  const months = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));

  const monthPercent = percent / (12 * 100);
  const monthPay = (amount - contribution) * (monthPercent + monthPercent / (((1 + monthPercent) ** months) - 1));
  const totalAmount = (monthPay * months).toFixed(2);

  console.log(totalAmount);
  return totalAmount;
}


function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  name = name ? name : 'Аноним';

  const greeting = `Привет, мир! Меня зовут ${name}.`;
  console.log(greeting);
  return greeting;
}