'use strict';

function initCheckBirthday() {
  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  // код для задачи №1 писать здесь
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