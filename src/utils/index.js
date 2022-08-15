export function getArrayId(data, arrayMessage = []) {
    const values = Object.values(data);
    if (!arrayMessage.length) {
        arrayMessage = values.map(item => item.timeStep)
        return [values, arrayMessage];
    }
    let newValue = values.filter(item => {
        return !arrayMessage.includes(item.timeStep);
    })

    console.log("🚀 ~ getArrayId ~ newValue", newValue)
    return [newValue, arrayMessage];
}

export function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}