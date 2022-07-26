// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

//Напишіть функцію comparison(str1, str2), яка порівнює рядки без урахування
//регістру символів.

// const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
// console.log(comparison('string', 'StRiNg')); // true
// console.log(comparison('ABCDe', 'AbcdW')); // false

//Напишіть функцію JavaScript, яка повертає елементи масиву, які більші за вказане число.
// const BiggerElements = (elements, val) =>
//   elements.filter(element => element > val);
// const result = [14, 45, 4, 31, 64, 10];
// console.log(BiggerElements(result, 18));

//Напишіть функцію zeros(num, len), яка доповнює нулями до вказаної довжини
//числове значення з додатковим знаком «+» або «-« в залежності від аргументу,
//що передається.

// function zeros(num, len, sign) {
//   let str = '';
//   const string = num.toString();

//   if (string.length === len) return string;
//   if (string.length < len) str = string.padStart(len, '0');

//   return sign ? sign.concat(str) : str;
// }

// console.log(zeros(145, 5, '-')); // -00145
// console.log(zeros(33, 4, '+')); // +0033
// console.log(zeros(33, 4)); // 0033
// __________________________________________________________________

/*
 * Є масив. Значення в масиві будуть або числами, рядками, або їх комбінацією.
 Ваше завдання - повернути масив, в якому будуть йти спочатку числа, відсортовані 
 в порядку зростання, а потім рядки, відсортовані в алфавітному порядку.
  Значення повинні зберегти свій вихідний тип. Якщо на вході був рядок,
   то й повернутися повинен рядок, якщо число - число.
 */

// const sortFn = elements => {
//   const numbers = [];
//   const strings = [];
//   elements.map(element => {
//     typeof element === 'number' ? numbers.push(element) : strings.push(element);
//   });

//   return [
//     ...numbers.sort((a, b) => a - b),
//     ...strings.sort((a, b) => a.localeCompare(b)),
//   ];
// };
// console.log(sortFn([6, 2, 3, 4, 5]));
// console.log(sortFn([14, 32, 3, 5, 5]));
// console.log(sortFn([1, 2, 3, 4, 5]));
// console.log(sortFn(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
// Приклад:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']
// ____________________________________________
/*
Є багатомірний масив. Треба зробити його розгладити на один рівень
*/

// const arr = [
//   12,
//   [34, [2, [33]]],
//   34,
//   [23],
//   'hello',
//   ['five', ['some arr', ['last arr'], { name: 'John' }]],
// ];
// const arrFlat = array => {
//   let counter = 0;
//   while (array.some(item => Array.isArray(item))) {
//     array = array.flat((counter += 1));
//     console.log(counter);
//   }
//   console.log(array);
// };
// arrFlat(arr);

//  [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]
// ________________________________________________________________

// const arr = [
//   {
//     name: 'test',
//     value: 1,
//     children: [
//       {
//         name: 'test2',
//         value: 2,
//         children: [{ name: 'test3', value: 3 }],
//       },
//     ],
//   },
// ];

// const obj = {};
// const fn = array => {
//   array.map(item => {
//     obj[item.name] = Number(item.value);
//     if (Array.isArray(item.children)) {
//       fn(item.children);
//     }
//   });
// };
// fn(arr);
// console.log(obj);

// const fn2 = (array, callback) => {
//   const obj = {};
//   callback(array);
//   console.log(obj);
// };

// fn2(arr, fn);
// {test: 1, test2: 2, test3: 3}

// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

//Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(),
//який параметром приймає рядок, а повертає його в перевернутому вигляді,
//метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок,
//зробивши його першу літеру заголовком і метод ucWords, який приймає рядок і робить
//заголовною першу літеру кожного слова цього рядка.

// class MyString {
//   reverse(str) {
//     return [...str].reverse().join('');
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     return str
//       .split(' ')
//       .map(word => this.ucFirst(word))
//       .join(' ');
//   }
// }

// const str = new MyString();
// console.log(str);
// console.log(str.reverse('abcde')); //виведе 'edcba'
// console.log(str.ucFirst('abcde')); //виведе 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //виведе 'Abcde Abcde Abcde'

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// const worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName); //выведет 'Иванов Иван'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// Array.prototype.myMap = function (callback) {
//   const array = [];
//   console.log(this);
//   for (let i = 0; i < this.length; i += 1) {
//     array.push(callback(this[i], i, this));
//   }
//   return array;
// };
// const array = [1, 2, 3, 4, 5];
// const arr = array.myMap(item => item + 2);
// console.log(arr);

// Пересуньте м'яч по полю при натисканні на поле

const footballFieldRef = document.querySelector('.football-field');
const ballRef = document.querySelector('.ball');

footballFieldRef.addEventListener('click', onFootballFieldRefClick);

function onFootballFieldRefClick(evt) {
  console.log(evt);
  ballRef.
}
