var md5 = require('md5');
var input = require('../input')(4);

function getLowestNumber(secret, numZeroes) {
    var num = 1;

    while(md5(secret + num).slice(0, numZeroes) !== new Array(numZeroes + 1).join('0')) {
        num++;
    }

    return num;
}

console.log(getLowestNumber(input, 5)); //254575
console.log(getLowestNumber(input, 6)); //1038736