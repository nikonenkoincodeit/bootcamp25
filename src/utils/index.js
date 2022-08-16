export function getArrayId(data, arrayMessage = []) {
    const values = Object.values(data);
    if (!arrayMessage.length) {
        arrayMessage = values.map(item => item.timeStep)
        return [values, arrayMessage];
    }
    let newValue = values.filter(item => {
        return !arrayMessage.includes(item.timeStep);
    })

    for (let el of newValue) {
        arrayMessage.push(el.timeStep);
    }

    return [newValue, arrayMessage];
}

export function convertMs(ms) {

    const date = new Date(ms);

    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return { days, hours, minutes, seconds };
}


export function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}