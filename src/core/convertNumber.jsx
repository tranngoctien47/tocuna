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