//Task #1
function getRandomArray(length, min, max) {
  let result = [];
  for (i = 0; i < length; i++) {
    result = [...result, []];
  }
  const result1 = result.map(num => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  });
  return result1;
}
console.log(getRandomArray(3, 1, 100));

//Task #3
function getAverage(...numbers) {
  let count = numbers.length;
  const sum = numbers.reduce((accumulator, currentEl) => {
    if (currentEl - Math.floor(currentEl) === 0) {
      return accumulator + currentEl;
    } else {
      count -= 1;
      return accumulator + 0;
    }
  }, 0);
  return sum / count;
}
console.log(getAverage(0, 100, 3.75));

//Task #4
function getMedian(...numbers) {
  numbersLength = numbers.length;
  let result;
  if (numbersLength % 2 == 0) {
    result =
      (numbers.sort()[numbersLength / 2 - 1] +
        numbers.sort()[numbersLength / 2]) /
      2;
  } else {
    result = numbers.sort()[Math.floor(numbersLength / 2)];
  }
  return result;
}
console.log(getMedian(4, 3, 2, 1, 5));

//Task #5
function filterEvenNumbers(...numbers) {
  const filtered = numbers.filter(num => {
    if (num % 2 != 0) {
      return num;
    }
  });
  return filtered;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

//task #6

function countPositiveNumbers(...numbers) {
  let count = 0;
  numbers.forEach(name => {
    if (name > 0) {
      count += 1;
    }
  });
  return count;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, 5, -5));

//Task #7

function getDividedByFive(...numbers) {
  const filtered = numbers.filter(num => {
    if (num % 5 == 0) {
      return num;
    }
  });
  return filtered;
}
console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//Task #8
function replaceBadWords(string) {
  let bedWords = ['fuck', 'shit'];
  let result = string.split(' ').map(word => {
    let correctWord = word;
    for (i = 0; i < bedWords.length; i++) {
      if (word.toLowerCase().includes(bedWords[i])) {
        correctWord = word.toLowerCase().replace(bedWords[i], '****');
      }
    }
    return correctWord;
  });
  return result.join(' ');
}
console.log(replaceBadWords('Are you Fucking kidding?'));

//Task #9

function divideByThree(word) {
  let a = word;
  let result = [];
  while (a.length > 3) {
    result = [...result, a.slice(0, 3)];
    a = a.slice(3);
  }
  result = [...result, a];
  return result;
}

console.log(divideByThree('commander'));

document.writeln(`Завдання №1: ${getRandomArray(3, 1, 100)}`, '<br />');
document.writeln(`Завдання №3: ${getAverage(0, 100, 3.75)}`, '<br />');
document.writeln(`Завдання №4: ${getMedian(4, 3, 2, 1, 5)}`, '<br />');
document.writeln(
  `Завдання №5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)}`,
  '<br />'
);
document.writeln(
  `Завдання №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 5, -5)}`,
  '<br />'
);
document.writeln(
  `Завдання №7: ${getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}`,
  '<br />'
);
document.writeln(
  `Завдання №8: ${replaceBadWords('Are you fucking kidding?')}`,
  '<br />'
);
document.writeln(`Завдання №9: ${divideByThree('commander')}`, '<br />');
