'use strict';

const setDailyRhythm = (wakeUpTime, bedTime) => {
  const morningText = () => console.log(`Доброе утро, Вася. Уже ${transformTime()}`);
  const nightText = () => console.log(`Спокойной ночи, Вася! Уже ${transformTime()}`);

  const morningAlarm = setAlarm(wakeUpTime, morningText);
  const nightAlarm = setAlarm(bedTime, nightText);

  setInterval(morningAlarm, 1000);
  setInterval(nightAlarm, 1000);
};

const setAlarm = (time, callback) => () => {
  let currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' });
  return time === currentTime ? callback() : undefined;
}

setDailyRhythm('17:34', '17:35');
