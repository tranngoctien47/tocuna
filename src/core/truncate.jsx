export function truncate(value, precision) {
    var step = Math.pow(10, precision || 0);
    var temp = Math.trunc(step * value);
    var a = temp / step;
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const formatMoney = (money) => {
    let value = ""
    let dotIndex = money.indexOf(".")
    let length = money.length

    if (dotIndex !== -1) length = dotIndex

    for (let index = 1; index <= length; index++) {
        if (index % 3 === 1 && index > 1)
            value = `${money[length - index]},` + value
        else
            value = money[length - index] + value
    }
    if (dotIndex !== -1) value = value + money.slice(dotIndex)

    return value
}
export const fixedNumber = (number, digits) => {
    return Math.trunc(number * Math.pow(10, digits)) / Math.pow(10, digits)
}



export const formatDateTime = (str, char) => {

    let strSplit = str.split(char)

    let value1 = `${Number(strSplit[0]) < 10 ? `0${strSplit[0]}` : strSplit[0]}`
    let value2 = `${Number(strSplit[1]) < 10 ? `${char}0${strSplit[1]}` : `${char}${strSplit[1]}`}`
    let value3 = `${Number(strSplit[2]) < 10 ? `${char}0${strSplit[2]}` : `${char}${strSplit[2]}`}`

    return value1 + value2 + value3
}