const RandomGenerator = {
    getRandom: ({
        from,
        to,
        integer,
        numOfDecimals = 2
    } = params) => {
        let rand = Math.random() * (to - from) + from
        if (integer) {
            return Math.floor(rand)
        } else {
            let rounded = Math.round(rand * (Math.pow(10, numOfDecimals))) / Math.pow(10, numOfDecimals)
            return rounded
        }
    }
}

module.exports = RandomGenerator