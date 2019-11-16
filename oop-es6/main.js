'use strict';

console.log('-----Задача №1. Оружие-----');

class Weapon {
  constructor(weapon) {
    this.name = weapon.name;
    this.attack = weapon.attack;
    this.durability = weapon.durability;
    this.initialDurability = this.durability;
    this.range = weapon.range;
  }

  takeDamage(damage) {
    this.durability = this.durability > damage
      ? this.durability - damage
      : 0;
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability < this.initialDurability * 0.3) {
      return this.attack / 2;
    } else {
      return this.attack;
    }
  }

  isBroken() {
    return !this.durability;
  }
}

// ---Пример 1---
console.log('---Пример 1---');

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

// ---Пример 2---
console.log('\n---Пример 2---');

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

// ---Пример 3---
console.log('\n---Пример 3---');

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

// ---Пример 4---
console.log('\n---Пример 4---');

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

// ---Пример 6---
// В примерах выше уже созданы константы sword, arm, bow 
// Поэтому их пересоздавать не буду
const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const stuff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const stormStaff = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3,
});


console.log('\n\n-----Задача №2. Оружие-----');

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    });
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    });
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,
    });
  }
}

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const bow1 = new Bow();
console.log(bow1.name); // Лук
console.log(bow1.attack); // 10
console.log(bow1.durability); // 200
console.log(bow1.range); // 3

const longBow1 = new LongBow();
console.log(longBow1.name); // Длинный лук
console.log(longBow1.attack); // 15
console.log(longBow1.durability); // 200
console.log(longBow1.range); // 4
longBow1.takeDamage(50);
console.log(longBow1.durability); // 150
console.log(longBow1.isBroken()); // false


console.log('\n\n-----Задача №3. Школьный журнал-----');

class StudentLog {
  subjects = {};

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (!this.subjects[subject]) {
      this.subjects[subject] = [];
    }

    if (![1, 2, 3, 4, 5].includes(grade)) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      return this.subjects[subject].length;
    }

    this.subjects[subject].push(grade);
    return this.subjects[subject].length;
  }

  getAverageBySubject(subject) {
    const marks = this.subjects[subject];

    if (marks) {
      const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
      return totalMarks / marks.length;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let averageMarks = 0;

    for (const subject in this.subjects) {
      averageMarks += this.getAverageBySubject(subject);
    }

    return averageMarks 
      ? averageMarks / Object.keys(this.subjects).length
      : 0;
  }
}

console.log('\n');
const log = new StudentLog('Олег Никифоров');
console.log(`Имя ученика - ${log.getName()}`) 
console.log(`У ученика - ${log.addGrade(3, 'algebra')} оценок по предмету algebra`); 
console.log(`У ученика - ${log.addGrade('отлично!', 'math')} оценок по предмету math`); 
console.log(`У ученика - ${log.addGrade(4, 'algebra')} оценок по предмету algebra`);
console.log(`У ученика - ${log.addGrade(5, 'geometry')} оценок по предмету geometry`);
console.log(`У ученика - ${log.addGrade(25, 'geometry')} оценок по предмету geometry`);

console.log('\n');
const log1 = new StudentLog('Иван Иванов');
log1.addGrade(2, 'algebra');
log1.addGrade(4, 'algebra');
log1.addGrade(5, 'geometry');
log1.addGrade(4, 'geometry');
console.log(`Средняя оценка ученика по предмету geometry - ${log1.getAverageBySubject('geometry')}`);
console.log(`Средняя оценка ученика по предмету algebra - ${log1.getAverageBySubject('algebra')}`);
console.log(`Средняя оценка ученика по предмету math - ${log1.getAverageBySubject('math')}`);
console.log(`Средняя оценка по всем предметам - ${log1.getTotalAverage()}`);
