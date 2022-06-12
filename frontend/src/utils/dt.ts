export const getNowPadded = () => {
    const now = new Date()
    const hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    return `${hours}:${minutes}`
}