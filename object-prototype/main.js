'use strict';

function initCheckBirthday() {
  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  const currentDate = new Date().getTime();
  const birthdayDate = new Date(birthday).getTime();
  const diff = currentDate - birthdayDate;

  const millisecondsPerYear = 31557600000;  //с учетом високосных
  const age = diff / millisecondsPerYear;

  return age > 18;
}

function initPrintAnimalSound() {
  const animal = {
    sound: 'grrrr',
  };

  const result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
  if (typeof animal === 'undefined') {
    return null;
  }
  const sound = animal.sound;
  return sound;
}

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');

    const average = getAverageMark(marks);

    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {
  let totalMark = 0;
  
  for (const mark of marks) {
    totalMark += Number(mark);
  }

  const roundedAverage = Math.round(totalMark / marks.length);
  return roundedAverage;
}