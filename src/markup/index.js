import { convertMs, addLeadingZero } from '../utils'

export function messageMarkup(data, userId) {
    return data.map(data => {
        const { hours, minutes } = convertMs(data.timeStep)
        if (data.type === "text") {
            return /* html */ `<div class="box ${userId === data.uid ? 'darker' : ''}">
        <img src="${data.photoURL}" alt="Avatar" class="${userId === data.uid ? 'right' : ''}"/>
    <p>${data.message}</p >
    <span class="time-right">${addLeadingZero(hours)}:${addLeadingZero(minutes)}</span>
    </div > `} else if (data.type === "image") {
            console.log(data)
            return /* html */`<div class="img-wraper ${userId === data.uid ? 'right' : ''}">
            <img
              src="${data.photoURL}"
              alt="image"
              width="200"
              height="200"
            />
            <span class="time-photo">${addLeadingZero(hours)}:${addLeadingZero(minutes)}</span>
          </div>`
        }
    }).join('');

}

export function renderMarkup(markup, element) {
    element.insertAdjacentHTML('beforeend', markup)
}


// export function messageMarkup(data, userId) {
//         const { hours, minutes } = convertMs(data.timeStep)
//         return /* html */ `         `}).join('');
// }