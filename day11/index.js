var input = require('../input')(11);
var newPasswords = [];

function incrementString(str) {
    var base36 = parseInt(str, 36);
    return (base36 + 1).toString(36).replace('0', 'a');
}

var triples = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/;
var iol = /[iol]/;
var pairs = /(.)\1.*(.)\2/;

while(newPasswords.length < 2) {
    if(triples.test(input) && !iol.test(input) && pairs.test(input)) {
        newPasswords.push(input);
    }
    input = incrementString(input);
}

console.log('New password is ' + newPasswords[0]);
console.log('Next password is ' + newPasswords[1]);