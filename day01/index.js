var input = require('../input')(1);

var part1 = input.replace(/\(/g, '1+').replace(/\)/g, '-1+');
console.log(eval(part1.substr(0, part1.length - 1)));

var directions = input.split('');
var floor = 1;
var step = 1;

while(floor > -1) {
    if(directions[step] === '(') {
        floor++;
    } else if(directions[step] === ')') {
        floor--;
    }
    step++;
}

console.log(step);