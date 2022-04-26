var covertCoin = (coin, type) => {

    if (type == "TRC20") {

        return `${coin}_TRC20`
    } else {
        return coin
    }
}
export default covertCoin

