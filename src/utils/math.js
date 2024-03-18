export function randomNumberBetween(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }

export function toHundreth (number) {
    return (Math.round(number*100) / 100)
}

export const ln = (list, i) => parseInt(i) + 1 > list.length - 1 ? 0 : parseInt(i) + 1
export const lno = (object, key) => {
    const keys = Object.keys(object), index = parseInt(keys.indexOf(key))
    return keys[index + 1 > keys.length - 1 ? 0 : index + 1]
}