import { convertMs } from '../utils'
export function messageMarkup(data, userId) {
    console.log(userId);
    return data.map(data => {
        const { hours, minutes } = convertMs(data.timeStep)
        return /* html */ `<div class="box ${userId === data.uid ? 'darker' : ''}">
        <img src="${data.photoURL}" alt="Avatar" class="${userId === data.uid ? 'right' : ''}"/>
    <p>${data.message}</p >
    <span class="time-right">${hours}:${minutes}</span>
    </div > `}).join('');
}

export function renderMarkup(markup, element) {
    element.insertAdjacentHTML('beforeend', markup)
}
