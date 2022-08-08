/*
* Створити функцію getData, яка приймає два колбеки на випадок успішного виконання завдання 
//(`Ми це зробили, Біллі - ${msg}`) та на випадок помилки (`Кеп, у нас проблема - ${err}`).
 * Завдання повинно випадково виконуватися із затримкою в 1 секунду.
 * Якщо успішно -  передати в колбек '✅ СУПЕР!', якщо ні - '❌ ПОМИЛКА!'

* Переписати на Promise (спочатку з двома колбеками в then, потім з catch)
 * При будь-якому результаті в кінці виводити '🚀 Finished!'
*/

// Рандомна умова для виконання завдання

const getData = (onSuccess, onError) => {
  const isSuccess = Math.random() < 0.5;

  setTimeout(() => {
    if (isSuccess) {
      onSuccess('✅ СУПЕР!');
    } else {
      onError('❌ ПОМИЛКА!');
    }
  }, 1000);
};

const handleSuccess = msg => console.warn(`Ми це зробили, Біллі - ${msg}`);
const handleError = error => console.error(`Кеп, у нас проблема - ${error}`);
const handleFinished = () => console.log('🚀 Finished!');
//getData(handleSuccess, handleError);

function getDataPromise() {
  const isSuccess = Math.random() < 0.5;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isSuccess) {
        res('✅ СУПЕР!');
      } else {
        rej('❌ ПОМИЛКА!');
      }
    }, 1000);
  });
}

getDataPromise()
  .then(handleSuccess)
  .catch(handleError)
  .finally(() => {
    handleFinished();
  });
