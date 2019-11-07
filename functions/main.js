// Задача №1
console.log('------Задача №1------');

function getSolutions(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  const result = { D };

  if (D === 0) {
    const x1 = -b / (2 * a);
    result.roots = [ x1 ];
  } if (D > 0) {
    const x1 = (-b + D ** 0.5) / (2 * a);
    const x2 = (-b - D ** 0.5) / (2 * a);
    result.roots = [ x1, x2 ];
  }

  return result;
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else {
    console.log('Уравнение не имеет вещественных корней');
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


// Задача №2
console.log('------Задача №2------');

function getAverageScore(data) {
  
}

function getAverageArray(arr) {
  let totalScore = 0;

  for (let el of arr) {
    totalScore += el;
  }

  return totalScore / arr.length();
}
