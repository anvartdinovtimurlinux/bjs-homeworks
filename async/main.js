'use strict';

const transformTime = () => new Date().toLocaleTimeString('en-US', {
  hour: 'numeric',
  hour12: false,
  minute: 'numeric'
});

const setDailyRhythm = (wakeUpTime, bedTime) => {
  const morningText = () => console.log(`Доброе утро, Вася. Уже ${transformTime()}`);
  const nightText = () => console.log(`Спокойной ночи, Вася! Уже ${transformTime()}`);

  const morningAlarm = setAlarm(wakeUpTime, morningText);
  const nightAlarm = setAlarm(bedTime, nightText);

  setInterval(morningAlarm, 1000);
  setInterval(nightAlarm, 1000);
};

const setAlarm = (time, callback) => () => {
  let currentTime = transformTime();
  return time === currentTime ? callback() : undefined;
}

setDailyRhythm('17:35', '17:36');


// Этот вариант тоже протестирован
// const goodMorning = () => alert('Доброе утро!');
// const checkTime = setAlarm('07:00', goodMorning);

// checkTime('07:30');
// checkTime('07:00'); // Доброе утро