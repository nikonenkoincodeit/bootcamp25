/*
 Запрашивайте содержимое пункта у пользователя с помощью prompt.
 Создавайте элемент <li> и добавляйте его к <ul>.
 Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
 Все элементы должны создаваться динамически.

 Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.

 */
const listEl = document.querySelector('.list')
let text = ''

do {
    text = prompt("Ввидіть текст")

    if (text) {
        const markup = createMarkup(text)
        insertMarkup(markup)
    }

} while (text)


function createMarkup(textMarkup) {
    return `<li>${textMarkup}</li>`
}

function insertMarkup(itemMarkup) {
    listEl.insertAdjacentHTML("beforeend", itemMarkup)
}
