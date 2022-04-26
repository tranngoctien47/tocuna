export const formatDateTime = (str, char) => {
    let strSplit = str.split(char)
    let value1 = `${Number(strSplit[0]) < 10 ? `0${strSplit[0]}` : strSplit[0]}`
    let value2 = `${Number(strSplit[1]) < 10 ? `${char}0${strSplit[1]}` : `${char}${strSplit[1]}`}`
    let value3 = `${Number(strSplit[2]) < 10 ? `${char}0${strSplit[2]}` : `${char}${strSplit[2]}`}`

    return value1 + value2 + value3
}