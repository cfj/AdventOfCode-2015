var md5 = require('md5');
var input = require('../input')(4);

function getLowestNumber(secret, numZeros) {
    var num = 1;
    var target = new Array(numZeros + 1).join('0');

    while(md5(secret + num).slice(0, numZeros) !== target) {
        num++;
    }

    return num;
}

console.log(getLowestNumber(input, 5)); //254575
console.log(getLowestNumber(input, 6)); //1038736