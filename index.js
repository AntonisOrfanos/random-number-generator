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

// let {
//     asdf,
//     fdsa
// } = {
//     "asdf": 12,
//     "fdsa": 21,
//     dsaf: 44
// }

// console.log(asdf)