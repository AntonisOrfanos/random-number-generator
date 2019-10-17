const rg = require('./random-generator')
let options = {
    from: -5,
    to: 0,
    integer: false,
    numOfDecimals: 3
}
console.log(rg.getRandom(options));
options.integer = true
console.log(rg.getRandom(options));
