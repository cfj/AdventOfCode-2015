var input = require('../input')(8);

var charactersExcludingWhitespace = input.split('').filter(function(e) {
    return e !== '\n' && e !== '\r';
});

var evaluatedString = '';
var totalLength = 0;

input.split('\r\n').forEach(function(line) {
    evaluatedString += eval(line);

    line.split('').forEach(function(c) {
        if(c === '\\' || c === '"') {
            totalLength += 2;
        } else {
            totalLength++;
        }
    });

    totalLength += 2;
});

console.log('Part 1:', charactersExcludingWhitespace.length - evaluatedString.length);
console.log('Part 2:', totalLength - charactersExcludingWhitespace.length);