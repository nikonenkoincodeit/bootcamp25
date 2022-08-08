/*
 * Є функція, яка генерує випадкові числа від 1 до 4.

 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки 
 * (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const getRandomNumber = () => Math.floor(Math.random() * 15) + 1;
const loaderRef = document.querySelector('.js-loader');
const btnRef = document.querySelector('.js-btn');

const makePromise = () => {
  const d = getRandomNumber();
  return new Promise((res, rej) => {
    setTimeout(() => {
      d > 12 ? res(d) : rej(d);
    }, d * 1000);
  });
};

const handleSuccess = delay => {
  console.log(`✅ Resolved after ${delay} sec`);
};

const handleError = delay => {
  console.log(`❌ Rejected after ${delay} sec`);
};

btnRef.addEventListener('click', () => {
  loaderRef.classList.remove('is-hidden');
  makePromise()
    .then(handleSuccess)
    .catch(handleError)
    .finally(() => {
      loaderRef.classList.add('is-hidden');
    });
});
